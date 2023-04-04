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
  setValue: UseFormSetValue<FieldValues>;
}

function FormSelect(props: IProps) {
  const { register, errors, valid, setValue, trigger } = props;
  const current = useRef("");

  function setCurrent(target: EventTarget) {
    current.current = (target as HTMLSelectElement).value || "";
    setValue("country", current.current);
    trigger("country");
  }

  return (
    <>
      <span>Select your country</span>
      <select
        {...(register("country"),
        {
          validate: () => valid(current.current),
        })}
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
