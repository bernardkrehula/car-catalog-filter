import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import "./index.css";
import type React from "react";
import { requestCarsOptions } from "../../../../api/requestCarsOptions";

const FilterOption = ({
  optionName,
  optionValue,
  setSearchParams
}: {
  optionName: string;
  optionValue: string[];
  setSearchParams: (value: string) => void
}) => {
  const handleClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    setSearchParams(prev => {
        const params = new URLSearchParams(prev);
        params.set(optionName, name);
        return params
    });
    requestCarsOptions();
  };
 
  return (
    <div className="filter-option">
      <h3>{optionName}</h3>
      <select name={optionName} onChange={handleClick} id="">
        {optionValue.map((value) => {
          return <option key={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};
export default FilterOption;
