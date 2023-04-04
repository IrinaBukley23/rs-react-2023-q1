import { FieldErrors } from "react-hook-form/dist/types/errors";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import "./formInput.scss";

interface IProps {
  labelText: string;
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export function isBirthday(value: string) {
  if (value === "") return false;
  if (new Date() < new Date(value)) return false;
  return true;
}

function BirthInput(props: IProps) {
  const { labelText, type, name, register, errors } = props;
  return (
    <>
      <label className="label">
        {labelText}
        <input
          className="field"
          type={type}
          name={name}
          {...register("bitrh", {
            required: "Field must be filled",
            validate: (value: string) => isBirthday(value),
          })}
        />
      </label>
      {errors.birth && (
        <p className="error">
          Date of birth cannot be greater than the current date
        </p>
      )}
    </>
  );
}

export default BirthInput;
