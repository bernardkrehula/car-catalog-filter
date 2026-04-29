import { useSearchParams } from "react-router-dom";

export const useCarFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const brand = searchParams.get("brand");
  const model = searchParams.get("model");
  const year = searchParams.get("year");
  const price = searchParams.get("price");
  const fuel_type = searchParams.get("fuel_type");
  const transmission = searchParams.get("transmission");
  const mileage = searchParams.get("mileage");
  const body_type = searchParams.get("body_type");
  const engine_size = searchParams.get("engine_size");
  const color = searchParams.get("color");

  const setFilters = (name: string, value: string) => {
    setSearchParams((params) => {
      params.set(name, value);
      return params;
    });
  };

  return {
    brand,
    model,
    year,
    price,
    fuel_type,
    transmission,
    mileage,
    body_type,
    engine_size,
    color,
    setFilters,
  };
};
