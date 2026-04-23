import { isAuthApiError } from "@supabase/supabase-js";
import supabase from "../config/supabaseClientVite";

export const requestSingleCarColumnNames = async () => {
  const { data, error } = await supabase.from("cars").select().limit(1).single();

  const { id, ...carskeys } = data;
  const carsKeys = Object.keys(carskeys).map(text => text.replace("_", " "));

  if (error) {
    if (isAuthApiError(error)) {
      throw new Error(error.message);
    } else throw Error(error.message);
  }
  return carsKeys;
};
