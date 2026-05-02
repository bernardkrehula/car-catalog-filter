export type CarType = {
  id: number;
  brand: string;
  year: number;
  price: number;
  fuel_type: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Manual" | "Automatic" | "Semi-auto";
  mileage: number;
  body_type: "Sedan" | "SUV" | "Hatchback" | "Coupe" | "Van";
  engine_size: string;
  color: string;
  image: string;
}
 