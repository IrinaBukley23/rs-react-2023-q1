/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import FormInput from "./formInput/formInput";
import FormSelect from "./formSelect/formSelect";
import "./myForm.scss";

class MyForm extends React.PureComponent {
  render() {
    return (
      <form className="form">
        <FormInput type="text" labelText="Enter your name" />
        <FormInput type="text" labelText="Enter your surname" />
        <FormInput type="date" labelText="Enter your birthday" />
        <FormSelect />
        <div className="form__radio">
          <FormInput type="radio" name="sex" value="male" labelText="male" />
          <FormInput
            type="radio"
            name="sex"
            value="female"
            labelText="female"
          />
        </div>
        <div className="form__file">
          <FormInput type="file" name="file" labelText="Choose a file" />
        </div>
        <div className="form__checkbox">
          <FormInput type="checkbox" labelText="Agree to data processing" />
        </div>
        <button type="submit" className="form__btn">
          Submit
        </button>
      </form>
    );
  }
}

export default MyForm;
