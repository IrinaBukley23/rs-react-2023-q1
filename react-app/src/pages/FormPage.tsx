import React from "react";
import { IUserData } from "types/type";
import FormCard from "../components/formCard/formCard";
import MyForm from "../components/form/myForm";
import "./page.scss";

interface IState {
  list: IUserData[];
}

class FormPage extends React.PureComponent {
  // eslint-disable-next-line react/state-in-constructor
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
      <div className="about">
        <h2 className="title">Form page</h2>
        <div className="about__wrapper">
          <div className="about__aside">
            <MyForm handleCreate={this.handleCreate} />
          </div>
          <div className="about__content">
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
