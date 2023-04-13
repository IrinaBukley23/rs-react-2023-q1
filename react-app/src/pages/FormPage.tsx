import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormList } from "../store/actions/actionCreators";
import MyForm from "../components/form/myForm";
import "./page.scss";
import FormCard from "../components/formCard/formCard";
import { State } from "../store/utils";
import { IUserData } from "../types/type";

function FormPage() {
  const [shouldShowElem, setShouldShowElem] = useState(false);
  const dispatch = useDispatch();
  const { formList } = useSelector((state: State) => state.form);
  const setForm = (): void => {
    dispatch(setFormList(JSON.parse(localStorage.users)));
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
              <FormCard
                user={formItem}
                key={`${formItem.birth}-${formItem.name}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FormPage;
