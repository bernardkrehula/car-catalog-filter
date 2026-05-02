import type { FilterRangeType } from "./FilterRangeType";

export type CarsFilterType = [
  { brand: string[] },
  { year: number[] },
  { price: FilterRangeType[] },
  { fuel_type: string[] },
  { transmission: string[] },
  { mileage: FilterRangeType[] },
  { body_type: string[] },
  { engine_size: string[] },
  { color: string[] },
];
