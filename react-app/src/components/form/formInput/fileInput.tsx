import { FieldErrors } from "react-hook-form/dist/types/errors";
import { FieldValues } from "react-hook-form/dist/types/fields";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import "./formInput.scss";

interface IProps {
  labelText: string;
  type: string;
  value: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export function isImage(fileList: FileList) {
  if (fileList.length === 0) return false;
  if (!fileList[0].type.includes("image")) return false;
  return true;
}

function FileInput(props: IProps) {
  const { register, errors } = props;
  return (
    <div className="input__wrapper">
      <input
        type="file"
        className="form__file"
        accept="image/*"
        {...register("file", {
          validate: (value) => isImage(value),
        })}
      />
      {errors.file && <p className="error">You can load only images</p>}
    </div>
  );
}

export default FileInput;
