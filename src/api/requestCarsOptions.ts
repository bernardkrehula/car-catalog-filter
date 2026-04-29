import { isAuthApiError } from "@supabase/supabase-js";
import supabase from "../config/supabaseClientVite";

export const requestCarsOptions = async (carFilters) => {
  const filters = Object.entries(carFilters)
    .filter(([_, value]) => value !== null && value !== "")
    .flatMap(([key, value]) => ({ [key]: value }));

  const filterObject = Object.assign({}, ...filters);
  const { data, error } = await supabase
    .from("cars")
    .select()
    .match(filterObject);

  if (error) {
    if (isAuthApiError(error)) {
      throw new Error(error.message);
    } else throw Error(error.message);
  }
  return data;
};
