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

function NameInput(props: IProps) {
  const { labelText, type, name, register, errors } = props;
  return (
    <>
      <label className="label">
        {labelText}
        <input
          className="field"
          type={type}
          name={name}
          {...register("name", {
            required: true,
            pattern: /[A-Z\u0410-\u042f]{1}[a-z\u0430-\u044f]{1,}$/,
          })}
        />
      </label>
      {errors.name && (
        <p className="error">
          Name must start with a capital letter and contains more than two
          characters.
        </p>
      )}
    </>
  );
}

export default NameInput;
