import styled from "styled-components";

export const CardItem = styled.div`
  background-color: ${(props) => props?.bg ?? "#fff"};
  padding: ${(props) => props?.padding ?? "10px"};
  margin: ${(props) =>
    props.margin ? `${props.margin}!important` : "10px 0px"};
  width: ${(props) => props?.width ?? "200px"};
  border-radius: 20px;

  @media (max-width: 630px) {
    max-width: 100%;
    min-width: 230px;
  }
`;
