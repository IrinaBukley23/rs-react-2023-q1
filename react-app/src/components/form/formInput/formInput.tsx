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
  onFocus: () => void;
}

class FormInput extends React.PureComponent<IProps> {
  render() {
    const { labelText, type, value, name, reference, onFocus } = this.props;
    return (
      <label className="label">
        {labelText}
        <input
          ref={reference}
          className="field"
          type={type}
          value={value}
          name={name}
          onFocus={onFocus}
        />
      </label>
    );
  }
}

export default FormInput;
