/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef, FormEvent } from "react";
import { IUserData } from "types/type";
import FormInput from "./formInput/formInput";
import FormSelect from "./formSelect/formSelect";
import "./myForm.scss";

interface IState {
  shouldShowElem?: boolean;
}

interface IProps {
  handleCreate: (formItem: IUserData) => void;
}

interface Fields {
  refName: React.RefObject<HTMLInputElement>;
  refBirth: React.RefObject<HTMLInputElement>;
  refCountry: React.RefObject<HTMLSelectElement>;
  refMale: React.RefObject<HTMLInputElement>;
  refFemale: React.RefObject<HTMLInputElement>;
  refProfile: React.RefObject<HTMLInputElement>;
  refAgree: React.RefObject<HTMLInputElement>;
}

class MyForm extends React.Component<IProps> {
  // eslint-disable-next-line react/state-in-constructor
  state: IState;

  fields: Fields;

  timer = 0;

  constructor(props: IProps) {
    super(props);
    this.state = {
      shouldShowElem: false,
    };
    this.fields = {
      refName: createRef(),
      refBirth: createRef(),
      refCountry: createRef(),
      refMale: createRef(),
      refFemale: createRef(),
      refProfile: createRef(),
      refAgree: createRef(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    clearInterval(this.timer);
  }

  componentDidMount(): void {
    this.timer = setInterval(() => {
      this.setState({
        shouldShowElem: false,
      });
    }, 4000) as unknown as number;
  }

  handleSubmit = (e: FormEvent) => {
    const item: IUserData = {
      profile: this.fields.refProfile.current?.value || "",
      name: this.fields.refName.current?.value || "",
      birth: this.fields.refBirth.current?.value || "",
      country: this.fields.refCountry.current?.value || "",
      male: this.fields.refMale.current?.checked || false,
      female: this.fields.refFemale.current?.checked || false,
    };
    e.preventDefault();
    const { handleCreate } = this.props;
    this.setState({
      shouldShowElem: true,
    });
    handleCreate(item);
  };

  render() {
    const { shouldShowElem } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <FormInput
          reference={this.fields.refName}
          type="text"
          labelText="Enter your name"
        />
        <FormInput
          reference={this.fields.refBirth}
          type="date"
          labelText="Enter your birthday"
        />
        <FormSelect reference={this.fields.refCountry} />
        <div className="form__radio">
          <FormInput
            reference={this.fields.refMale}
            type="radio"
            name="sex"
            value="male"
            labelText="male"
          />
          <FormInput
            reference={this.fields.refFemale}
            type="radio"
            name="sex"
            value="female"
            labelText="female"
          />
        </div>
        <div className="form__file">
          <FormInput
            reference={this.fields.refProfile}
            type="file"
            name="file"
            labelText="Choose a file"
          />
        </div>
        <div className="form__checkbox">
          <FormInput
            reference={this.fields.refAgree}
            type="checkbox"
            labelText="Agree to data processing"
          />
        </div>
        <button type="submit" className="form__btn">
          Submit
        </button>
        <div className="form__message">
          {shouldShowElem ? <div>Accepted</div> : null}
        </div>
      </form>
    );
  }
}

export default MyForm;
