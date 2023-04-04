import { FieldErrors } from "react-hook-form/dist/types/errors";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import "./formInput.scss";

interface IProps {
  labelText: string;
  type: string;
  // eslint-disable-next-line react/require-default-props
  value?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

function AgreeInput(props: IProps) {
  const { labelText, type, value, name, register, errors } = props;
  return (
    <>
      <label className="label">
        {labelText}
        <input
          className="field"
          type={type}
          value={value}
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
