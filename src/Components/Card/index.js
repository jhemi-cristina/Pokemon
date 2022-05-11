import { CardItem } from "./styles";

const Card = ({ children, ...props }) => {
  return <CardItem {...props}>{children}</CardItem>;
};

export { Card };
