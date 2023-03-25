import React, { RefObject } from "react";
import { ICountry } from "types/type";
import countries from "../../../constants/countries";
import "./formSelect.scss";

interface IProps {
  reference: RefObject<HTMLSelectElement>;
}

class FormSelect extends React.PureComponent<IProps> {
  render() {
    const { reference } = this.props;
    return (
      <>
        <span>Select your country</span>
        <select ref={reference} className="select" required>
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
