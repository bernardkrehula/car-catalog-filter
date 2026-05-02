import { isAuthApiError } from "@supabase/supabase-js";
import supabase from "../config/supabaseClientVite";

export const requestFilteredCars = async (carFilters) => {
  const filters = Object.entries(carFilters)
    .filter(([_, value]) => value !== null && typeof value === "string" && !value.startsWith("{"))
    .flatMap(([key, value]) => ({ [key]: value }));

 const customFilter = Object.assign({}, ...filters);
  const rangeFilter = Object.entries(carFilters)
    .filter(
      ([_, value]) =>
        value !== null && typeof value === "string" && value.startsWith("{"),
    )
    .flatMap(([key, value]) => ({ [key]: value }));

  const filterObject = Object.assign({}, ...rangeFilter);

  let query = supabase.from("cars").select("*").match(customFilter)
  
  Object.entries(filterObject).map(async (value) => {
    if (typeof value[1] === "string" && value[1].startsWith("{")) {
      const filterName = value[0];
      const { from, to } = JSON.parse(carFilters[filterName]);
      query = query.gte(filterName, from).lte(filterName, to);
    }
  });

  if ((await query).error) {
    if (isAuthApiError((await query).error)) {
      throw new Error(query.error.message);
    } else throw Error(query.error.message);
  }
  return (await query).data;
};
