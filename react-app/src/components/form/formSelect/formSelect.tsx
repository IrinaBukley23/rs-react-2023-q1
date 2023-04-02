import React, { RefObject } from "react";
import { ICountry } from "types/type";
import countries from "../../../constants/countries";
import "./formSelect.scss";

interface IProps {
  value: string;
  onFocus: () => void;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function FormSelect(props: IProps) {
  const { onFocus, onChange, value } = props;
  return (
    <>
      <span>Select your country</span>
      <select
        className="select"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
      >
        {countries.map((country: ICountry) => {
          return (
            <option key={country.id} value={country.value}>
              {country.title}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default FormSelect;
