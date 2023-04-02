import { useContext } from "react";
import { IUserData } from "types/type";
// import FormCard from "../components/formCard/formCard";
import MyForm from "../components/form/myForm";
import "./page.scss";
import { GlobalContext } from "../store/GlobalContext";

function FormPage() {
  const { formList, setFormList } = useContext(GlobalContext);
  const handleCreate = () => {
    setFormList([...formList]);
  };

  return (
    <div className="formpage">
      <h2 className="title">Form page</h2>
      <div className="formpage__wrapper">
        <div className="formpage__aside">
          <MyForm handleCreate={handleCreate} />
        </div>
      </div>
    </div>
  );
}

export default FormPage;
