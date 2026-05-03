import type { CarType } from "../../../types/data.types.ts/CarType";
import "./index.css";

const Car = ({ car }: { car: CarType }) => {
  const {
    brand,
    year,
    price,
    fuel_type,
    transmission,
    mileage,
    body_type,
    engine_size,
    color,
  } = car;

  return (
    <div className="car">
      <div className="car-title">
        <h3 className="car-brand">{brand}</h3>
        <h3>
          {engine_size} {fuel_type}
        </h3>
      </div>
      <h2 className="car-price">€ {price}</h2>
      <div className="car-description">
        <h3>
          {year} | {mileage} | {transmission} | {body_type} |
        </h3>
        <div className="car-color" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
};
export default Car;
