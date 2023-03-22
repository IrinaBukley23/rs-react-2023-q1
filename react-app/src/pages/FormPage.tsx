import React from "react";
import MyForm from "../components/form/myForm";
import "./page.scss";

class FormPage extends React.PureComponent {
  render() {
    return (
      <div className="about__wrapper">
        <h2 className="title">Form page</h2>
        <MyForm />
      </div>
    );
  }
}

export default FormPage;
