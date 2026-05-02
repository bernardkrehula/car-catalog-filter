import { useQuery } from "@tanstack/react-query";
import { requestFilteredCars } from "../../api/requestFilteredCars";
import "./index.css";
import { useCarFilter } from "../../components/layouts/CarsFilter/hooks/useCarFilter";
import CarsFilter from "../../components/layouts/CarsFilter";
import Car from "./car";

const Homepage = () => {
  const { setFilters, clearFilters, ...carFilters } = useCarFilter();
  const { data: cars } = useQuery({
    queryKey: ["cars", carFilters],
    queryFn: () => requestFilteredCars(carFilters),
  });
  
  return (
    <div className="homepage">
      <CarsFilter />
      <div className="cars">
        {cars?.map((car) => {
          const { id } = car;
          return <Car key={id} car={car} />;
        })}
      </div>
    </div>
  );
};
export default Homepage;
