import "./formInput.scss";

interface IProps {
  labelText: string;
  type: string;
  value: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInput(props: IProps) {
  const { onChange, type, name, value, labelText } = props;
  return (
    <label className="label">
      {labelText}
      <input
        className="field"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default FormInput;
