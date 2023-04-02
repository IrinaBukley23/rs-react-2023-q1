import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormInput from "./formInput/formInput";
import FormSelect from "./formSelect/formSelect";
import "./myForm.scss";

function MyForm() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [file, setFile] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [agree, setAgree] = useState(false);
  const [formItem, setFormItem] = useState({});
  const [shouldShowElem, setShouldShowElem] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setShouldShowElem(true);
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
    setFormItem({
      id: uuidv4(),
      name,
      birth,
      country,
      profile: file,
      sex: male ? "Male" : "Female",
    });
    setName("");
    setBirth("");
    setCountry("");
    setMale(false);
    setFemale(false);
    setFile("");
    setAgree(false);
  };

  return (
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
  );
}

export default MyForm;
