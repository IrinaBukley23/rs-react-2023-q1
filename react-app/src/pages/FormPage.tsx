import { useEffect, useState } from "react";
import { IUserData } from "types/type";
import MyForm from "../components/form/myForm";
import "./page.scss";
import FormCard from "../components/formCard/formCard";

function FormPage() {
  const [shouldShowElem, setShouldShowElem] = useState(false);
  const [formList, setFormList] = useState<IUserData[]>(
    JSON.parse(localStorage.users || "[]")
  );
  console.log(formList);
  const setForm = (): void => {
    setFormList(JSON.parse(localStorage.users));
    setShouldShowElem(true);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setShouldShowElem(false);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="formpage">
      <h2 className="title">Form page</h2>
      <div className="formpage__wrapper">
        <div className="formpage__aside">
          <MyForm setForm={setForm} />
          <div className="form__message">
            {shouldShowElem ? <div>Accepted</div> : null}
          </div>
        </div>
        <div className="formpage__content">
          {formList.map((formItem: IUserData, index) => {
            return (
              // eslint-disable-next-line react/no-array-index-key
              <FormCard user={formItem} key={`${formItem.birth}-${index}`} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FormPage;
