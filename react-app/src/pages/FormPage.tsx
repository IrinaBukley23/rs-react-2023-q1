import { useState } from "react";
import { IUserData } from "types/type";
import FormCard from "../components/formCard/formCard";
import MyForm from "../components/form/myForm";
import "./page.scss";

function FormPage() {
  const [list, setList] = useState<IUserData[]>([]);

  const handleCreate = (item: IUserData) => {
    setList([...list, item]);
  };

  return (
    <div className="formpage">
      <h2 className="title">Form page</h2>
      <div className="formpage__wrapper">
        <div className="formpage__aside">
          <MyForm handleCreate={handleCreate} />
        </div>
        <div className="formpage__content">
          {list.map((formItem: IUserData) => {
            return <FormCard user={formItem} key={formItem.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FormPage;
