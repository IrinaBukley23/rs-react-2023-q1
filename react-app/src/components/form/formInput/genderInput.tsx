import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";

interface IProps {
  labelText: string;
  type: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

export default function InputGender({ register }: IProps) {
  return (
    <label className="label">
      Gender
      <div className="form__switcher">
        <input type="checkbox" className="switcher" {...register("gender")} />
        <div className="knobs" />
      </div>
    </label>
  );
}
