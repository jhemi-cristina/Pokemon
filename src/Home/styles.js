import styled from "styled-components";

export const Container = styled.div`
  background-color: #323232;
  min-height: 90vh;
  padding: 40px;
`;

export const HeaderPage = styled.div``;

export const Image = styled.img`
  display: flex;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #e5d7d7;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Content = styled.div`
  background-color: #c4c4c4;
  padding: 40px;
  border-radius: 6px;
  margin-top: 40px;
  min-height: 600px;

  Input {
    justify-content: flex-end;
    margin-bottom: 40px;
  }
`;

export const PokeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const SectionRight = styled.div`
  display: flex;
  justify-content: right;
`;
