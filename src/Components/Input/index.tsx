import { InputHTMLAttributes } from "react";
import { InputItem } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  props?: Node;
}

const Input = ({ ...props }: IInput) => {
  return <InputItem {...props} />;
};

export { Input };
