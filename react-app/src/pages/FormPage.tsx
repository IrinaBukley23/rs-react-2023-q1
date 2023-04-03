import { useContext } from "react";
import { IUserData } from "types/type";
import MyForm from "../components/form/myForm";
import "./page.scss";
import { GlobalContext } from "../store/GlobalContext";
import FormCard from "../components/formCard/formCard";

function FormPage() {
  const { formList } = useContext(GlobalContext);

  return (
    <div className="formpage">
      <h2 className="title">Form page</h2>
      <div className="formpage__wrapper">
        <div className="formpage__aside">
          <MyForm />
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
