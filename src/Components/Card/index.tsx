import { CardItem } from "./styles";

const Card = ({ ...props }: any) => {
  return <CardItem {...props}>{props.children}</CardItem>;
};

export { Card };
