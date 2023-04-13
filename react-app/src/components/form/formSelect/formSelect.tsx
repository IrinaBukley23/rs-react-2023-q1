import { useRef } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form/dist/types";
import { ICountry } from "types/type";
import countries from "../../../constants/countries";
import "./formSelect.scss";

interface IProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  valid: (value: string) => boolean;
  trigger: UseFormTrigger<FieldValues>;
  setCountry: UseFormSetValue<FieldValues>;
}

function FormSelect(props: IProps) {
  const { register, errors, setCountry, trigger } = props;
  const current = useRef("");

  const setCurrent = (target: EventTarget) => {
    current.current = (target as HTMLSelectElement).value || "";
    setCountry("country", current.current);
    trigger("country");
  };

  return (
    <>
      <span>Select your country</span>
      <select
        {...register("country")}
        className="select"
        onClick={(event) => setCurrent(event.target)}
      >
        {countries.map((country: ICountry) => {
          return (
            <option key={country.id} value={country.value}>
              {country.title}
            </option>
          );
        })}
      </select>
      {errors.country && <p className="error">Select one country</p>}
    </>
  );
}

export default FormSelect;
