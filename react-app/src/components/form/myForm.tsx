import "./myForm.scss";
import { FieldValues, useForm } from "react-hook-form";
import { IUserData } from "types/type";
import FormSelect from "./formSelect/formSelect";
import NameInput from "./formInput/nameInput";
import BirthInput from "./formInput/birthInput";
import GenderInput from "./formInput/genderInput";
import AgreeInput from "./formInput/agreeInput";
import FileInput from "./formInput/fileInput";
import { isCountry, submitForm } from "./helpers";

interface IFormProps {
  setForm: () => void;
}

function MyForm({ setForm }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    setValue,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: FieldValues) => {
    submitForm(data as IUserData, setForm);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} name="user">
      <NameInput
        name="name"
        register={register}
        type="text"
        labelText="Enter your name"
        errors={errors}
      />
      <BirthInput
        name="birth"
        register={register}
        errors={errors}
        type="date"
        labelText="Enter your birthday"
      />

      <FormSelect
        register={register}
        errors={errors}
        valid={isCountry}
        trigger={trigger}
        setValue={setValue}
      />
      <div className="form__radio">
        <GenderInput
          register={register}
          labelText="Choose a gender"
          type="checkbox"
          name="gender"
        />
      </div>
      <div className="form__file">
        <FileInput
          register={register}
          errors={errors}
          type="file"
          name="file"
          labelText="Choose a file"
          value="file"
        />
      </div>
      <div className="form__checkbox">
        <AgreeInput
          register={register}
          errors={errors}
          type="checkbox"
          labelText="Agree to data processing"
          name="agree"
        />
      </div>

      <button type="submit" className="form__btn">
        Submit
      </button>
    </form>
  );
}

export default MyForm;
