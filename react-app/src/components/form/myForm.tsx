import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./myForm.scss";
import { GlobalContext } from "../../store/GlobalContext";
import { ICountry } from "../../types/type";
import countries from "../../constants/countries";

function MyForm() {
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

  const handleCheckAgree = (event: ChangeEvent<HTMLInputElement>) => {
    setAgree(!agree);
  };

  const handleShow = (e: FormEvent) => {
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

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShouldShowElem(false);
  };

  const handleReset = () => {
    setName("");
    setBirth("");
    setCountry("");
    setMale(false);
    setFemale(false);
    setFile("");
    setAgree(false);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        birth: "",
        country: "",
        male: false,
        female: false,
        file: "",
        agree: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "Too short!")
          .required("This field is required!"),
        birth: Yup.date().required("This field is required!"),
        country: Yup.string().required("This field is required!"),
        male: Yup.boolean().required("This field is required!"),
        female: Yup.boolean().required("This field is required!"),
        file: Yup.string().required("This field is required!"),
        agree: Yup.boolean()
          .required("Сonsent required!")
          .oneOf([true], "Сonsent required!"),
      })}
      onSubmit={(values) => {
        JSON.stringify(values, null, 2);
      }}
    >
      <Form className="form" onSubmit={handleSubmit} name="user">
        <label className="label" htmlFor="formName">
          Enter your name
        </label>
        <Field
          id="formName"
          className="field"
          name="name"
          type="text"
          value={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, setName)
          }
        />
        {!name && (
          <ErrorMessage className="error" name="name" component="div" />
        )}
        <label className="label" htmlFor="formBirth">
          Enter your birthday
        </label>
        <Field
          className="field"
          name="birth"
          type="date"
          id="formBirth"
          value={birth}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, setBirth)
          }
        />
        {!birth && (
          <ErrorMessage className="error" name="birth" component="div" />
        )}
        <label className="label" htmlFor="formCountry">
          Select your country
        </label>
        <Field
          id="formCountry"
          as="select"
          className="select"
          value={country}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            handleChange(event, setCountry)
          }
        >
          {countries.map((item: ICountry) => {
            return (
              <option key={item.id} value={item.value}>
                {item.title}
              </option>
            );
          })}
        </Field>
        {!country && (
          <ErrorMessage className="error" name="country" component="div" />
        )}
        <div className="form__radio">
          <input
            id="formMale"
            className="field"
            name="sex"
            type="radio"
            value={male ? "male" : ""}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleCheck(event, setMale)
            }
          />
          <label className="label" htmlFor="formMale">
            male
          </label>
          <input
            id="formFemale"
            className="field"
            name="sex"
            type="radio"
            value={female ? "female" : ""}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleCheck(event, setFemale)
            }
          />
          <label className="label" htmlFor="formFemale">
            female
          </label>
        </div>
        {((!male && female) || (male && !female)) && (
          <ErrorMessage className="error" name="sex" component="div" />
        )}
        <div className="form__file">
          <Field
            className="field"
            name="file"
            type="file"
            value={file}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleChange(event, setFile)
            }
          />
        </div>
        {!file && (
          <ErrorMessage className="error" name="profile" component="div" />
        )}
        <div className="form__checkbox">
          <input
            id="formAgree"
            className="field"
            name="agree"
            value={agree}
            type="checkbox"
            onChange={handleCheckAgree}
          />
          <label className="label" htmlFor="formAgree">
            Agree to data processing
          </label>
          {!agree && (
            <ErrorMessage className="error" name="agree" component="div" />
          )}
        </div>
        <Field
          id="submit"
          value="Submit"
          type="submit"
          className="form__btn"
          onClick={handleShow}
        />
        <Field
          value="Reset"
          type="button"
          onClick={handleReset}
          className="form__btn"
        />
        <div className="form__message">
          {shouldShowElem ? <div>Accepted</div> : null}
        </div>
      </Form>
    </Formik>
  );
}

export default MyForm;
