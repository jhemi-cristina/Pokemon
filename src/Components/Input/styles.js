import styled from "styled-components";

export const InputItem = styled.input`
  border-radius: 4px;
  border: none;
  width: ${(props) => props?.width ?? "302px"};
  height: ${(props) => props?.height ?? "30px"};
  padding: 5px 15px;
  background: #e5d7d7;

  /* &::-webkit-input-placeholder {
    color: red !important;
  } */
`;
