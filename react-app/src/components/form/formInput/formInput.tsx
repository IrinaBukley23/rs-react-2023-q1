import React from "react";
import "./formInput.scss";

interface IProps {
  labelText?: string;
  type: string;
  value?: string;
  name?: string;
  className?: string;
  style?: unknown;
  reference?: React.RefObject<HTMLInputElement>;
  onChange?: () => void;
}

class FormInput extends React.PureComponent<IProps> {
  render() {
    const { labelText, type, value, name, reference } = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label className="label">
        {labelText}
        <input
          ref={reference}
          className="field"
          type={type}
          value={value}
          name={name}
          required
        />
      </label>
    );
  }
}

export default FormInput;
