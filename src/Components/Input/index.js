import { InputItem } from "./styles";

const Input = ({ placeholder, value, onChange }) => {
  return (
    <InputItem placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export { Input };
