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

function AgreeInput(props: IProps) {
  const { labelText, type, name, register, errors } = props;
  return (
    <>
      <label className="label">
        {labelText}
        <input
          className="field"
          type={type}
          name={name}
          {...register("agree", {
            required: true,
          })}
        />
      </label>
      {errors.accept && <p className="error">You must agree</p>}
    </>
  );
}

export default AgreeInput;
