import styled from "styled-components";

export const CardItem = styled.div`
  background-color: ${(props) => props?.bg ?? "#fff"};
  padding: ${(props) => props?.padding ?? "10px"};
  margin: ${(props) =>
    props.margin ? `${props.margin}!important` : "10px 0px"};
  width: ${(props) => props?.width ?? "330px"};
  border-radius: 3px;
`;
