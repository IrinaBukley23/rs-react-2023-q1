/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createRef, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { IUserData } from "types/type";
import FormInput from "./formInput/formInput";
import FormSelect from "./formSelect/formSelect";
import "./myForm.scss";

interface IState {
  shouldShowElem?: boolean;
  errors: Errors;
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

interface Errors {
  name?: boolean;
  birth?: boolean;
  country?: boolean;
  sex?: boolean;
  profile?: boolean;
  agree?: boolean;
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
      errors: {},
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

  isValidate = () => {
    const { errors } = this.state;
    if (!this.fields.refName.current?.value) errors.name = true;
    if (!this.fields.refBirth.current?.value) errors.birth = true;
    if (!this.fields.refCountry.current?.value) errors.country = true;
    if (!this.fields.refProfile.current?.value) errors.profile = true;
    if (!this.fields.refAgree.current?.checked) errors.agree = true;
    if (
      !this.fields.refMale.current?.checked &&
      !this.fields.refFemale.current?.checked
    )
      errors.sex = true;
    return Boolean(Object.keys(errors).length);
  };

  handleSubmit = (e: FormEvent) => {
    const item: IUserData = {
      id: uuidv4(),
      profile: this.fields.refProfile.current?.value || "",
      name: this.fields.refName.current?.value || "",
      birth: this.fields.refBirth.current?.value || "",
      country: this.fields.refCountry.current?.value || "",
      male: this.fields.refMale.current?.checked || false,
      female: this.fields.refFemale.current?.checked || false,
    };
    e.preventDefault();
    const { handleCreate } = this.props;
    if (!this.isValidate()) {
      handleCreate(item);
      this.setState({
        shouldShowElem: true,
      });
    }
  };

  dropError(filed: keyof IState["errors"]) {
    const { errors } = this.state;
    delete errors[filed];

    this.setState({
      errors,
    });
  }

  render() {
    const { shouldShowElem, errors } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit} name="user">
        <FormInput
          reference={this.fields.refName}
          type="text"
          labelText="Enter your name"
          onFocus={() => this.dropError("name")}
        />
        {errors.name ? <div className="error">field is required</div> : null}
        <FormInput
          reference={this.fields.refBirth}
          type="date"
          labelText="Enter your birthday"
          onFocus={() => this.dropError("birth")}
        />
        {errors.birth ? <div className="error">field is required</div> : null}
        <FormSelect
          reference={this.fields.refCountry}
          onFocus={() => this.dropError("country")}
        />
        {errors.country ? <div className="error">field is required</div> : null}
        <div className="form__radio">
          <FormInput
            reference={this.fields.refMale}
            type="radio"
            name="sex"
            value="male"
            labelText="male"
            onFocus={() => this.dropError("sex")}
          />
          <FormInput
            reference={this.fields.refFemale}
            type="radio"
            name="sex"
            value="female"
            labelText="female"
            onFocus={() => this.dropError("sex")}
          />
        </div>
        {errors.sex ? <div className="error">field is required</div> : null}
        <div className="form__file">
          <FormInput
            reference={this.fields.refProfile}
            type="file"
            name="file"
            labelText="Choose a file"
            onFocus={() => this.dropError("profile")}
          />
        </div>
        {errors.profile ? <div className="error">field is required</div> : null}
        <div className="form__checkbox">
          <FormInput
            reference={this.fields.refAgree}
            type="checkbox"
            labelText="Agree to data processing"
            onFocus={() => this.dropError("agree")}
          />
        </div>
        {errors.agree ? <div className="error">field is required</div> : null}
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
