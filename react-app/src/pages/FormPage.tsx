import React from "react";
import { IUserData } from "types/type";
import FormCard from "../components/formCard/formCard";
import MyForm from "../components/form/myForm";
import "./page.scss";

interface IState {
  list: IUserData[];
}

class FormPage extends React.PureComponent {
  state: IState;

  constructor(props: object) {
    super(props);

    this.state = {
      list: [],
    };

    this.handleCreate = this.handleCreate.bind(this);
  }

  handleCreate(item: IUserData) {
    const { list } = this.state;
    this.setState({
      list: [...list, item],
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div className="formpage">
        <h2 className="title">Form page</h2>
        <div className="formpage__wrapper">
          <div className="formpage__aside">
            <MyForm handleCreate={this.handleCreate} />
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
}

export default FormPage;
