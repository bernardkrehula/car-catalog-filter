import { isAuthApiError } from "@supabase/supabase-js";
import supabase from "../config/supabaseClientNode.js";
import { cars } from "../data/cars.js";

export const requestCarDataUpload = async () => {
  const { error } = await supabase.from("cars").insert(cars).select();

  if (error) {
    if (isAuthApiError(error)) {
      throw new Error(error.message);
    }
  }

  return;
};
requestCarDataUpload();
