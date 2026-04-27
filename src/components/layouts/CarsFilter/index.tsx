import { useQuery } from "@tanstack/react-query";
import { requestSingleCarColumnNames } from "../../../api/requestSingleCarColumnNames";
import "./index.css";
import FilterOption from "./FilterOption";
import Btn from "../../ui/btn";
import { requestCarsOptions } from "../../../api/requestCarsOptions";
import { filterOptions } from "../../../data/filterOptions";

const CarsFilter = () => {
  const { data: options } = useQuery({
    queryKey: ["options"],
    queryFn: () => requestSingleCarColumnNames(),
  });

  return (
    <div className="cars-filter">
      {Object.entries(filterOptions).map(option => {
        return <FilterOption key={option[0]} optionName={option[0]} optionValue={option[1]}/>
      })

      }
      <Btn type="button" onClick={requestCarsOptions}>Find</Btn> 
    </div>
  );
};
export default CarsFilter;
