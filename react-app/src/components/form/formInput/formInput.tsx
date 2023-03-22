import React from "react";
import "./formInput.scss";

interface IProps {
  labelText?: string;
  type: string;
  value?: string;
  name?: string;
  className?: string;
  style?: unknown;
  onChange?: () => void;
}

class FormInput extends React.PureComponent<IProps> {
  render() {
    const { labelText, type, value, name } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className="label">
        {labelText}
        <input className="field" type={type} value={value} name={name} />
      </label>
    );
  }
}

export default FormInput;
