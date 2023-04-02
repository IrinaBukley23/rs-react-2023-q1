import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import FormInput from "./formInput/formInput";
import FormSelect from "./formSelect/formSelect";
import "./myForm.scss";
import { IUserData } from "../../types/type";
import { GlobalContext } from "../../store/GlobalContext";
import FormCard from "../formCard/formCard";

interface IProps {
  handleCreate: (item: IUserData) => void;
}

function MyForm(props: IProps) {
  const { name, setName } = useContext(GlobalContext);
  const { birth, setBirth } = useContext(GlobalContext);
  const { country, setCountry } = useContext(GlobalContext);
  const { file, setFile } = useContext(GlobalContext);
  const { male, setMale } = useContext(GlobalContext);
  const { female, setFemale } = useContext(GlobalContext);
  const { formList, setFormList } = useContext(GlobalContext);

  const [agree, setAgree] = useState(false);
  const [shouldShowElem, setShouldShowElem] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setShouldShowElem(false);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    callback: (value: string) => void
  ) => {
    callback(event.target.value);
  };

  const handleCheck = (
    event: ChangeEvent<HTMLInputElement>,
    callback: (value: boolean) => void
  ) => {
    callback(event.target.checked);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setShouldShowElem(true);
    setFormList([
      ...formList,
      {
        name,
        birth,
        country,
        profile: file,
        sex: male ? "Male" : "Female",
      },
    ]);
  };

  const { handleCreate } = props;

  return (
    <>
      <form className="form" onSubmit={handleSubmit} name="user">
        <FormInput
          name="name"
          type="text"
          labelText="Enter your name"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, setName)
          }
        />
        <FormInput
          name="birth"
          type="date"
          labelText="Enter your birthday"
          value={birth}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, setBirth)
          }
        />
        <FormSelect
          value={country}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            handleChange(event, setCountry)
          }
          onFocus={() => {}}
        />
        <div className="form__radio">
          <FormInput
            name="sex"
            type="radio"
            value={male ? "male" : ""}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleCheck(event, setMale)
            }
            labelText="male"
          />
          <FormInput
            name="sex"
            type="radio"
            value={female ? "female" : ""}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleCheck(event, setFemale)
            }
            labelText="female"
          />
        </div>
        <div className="form__file">
          <FormInput
            name="file"
            type="file"
            value={file}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, setFile)
            }
            labelText="Choose a file"
          />
        </div>
        <div className="form__checkbox">
          <FormInput
            name="agree"
            value={agree ? "agree" : ""}
            type="checkbox"
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleCheck(event, setAgree)
            }
            labelText="Agree to data processing"
          />
        </div>
        {/* {agree ? <div className="error">field is required</div> : null} */}
        <button type="submit" className="form__btn">
          Submit
        </button>
        <div className="form__message">
          {shouldShowElem ? <div>Accepted</div> : null}
        </div>
      </form>
      <div className="formpage__content">
        {formList.map((formItem: IUserData, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <FormCard user={formItem} key={`${formItem.birth}-${index}`} />
          );
        })}
      </div>
    </>
  );
}

export default MyForm;
