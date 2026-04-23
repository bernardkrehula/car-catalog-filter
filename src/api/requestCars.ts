import { isAuthApiError } from "@supabase/supabase-js";
import supabase from "../config/supabaseClientVite"

export const requestCars = async() => {
    const { data, error } = await supabase
    .from('cars')
    .select();

    if(error){
        if(isAuthApiError(error)){
            throw new Error(error.message)
        }
        else throw Error(error.message)
    }
    return data;
}