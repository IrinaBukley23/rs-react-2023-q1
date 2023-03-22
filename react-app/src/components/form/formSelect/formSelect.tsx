import React from "react";
import { ICountry } from "types/type";
import countries from "../../../constants/countries";
import "./formSelect.scss";

class FormSelect extends React.PureComponent {
  render() {
    return (
      <>
        <span>Select your country</span>
        <select className="select">
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
}

export default FormSelect;
