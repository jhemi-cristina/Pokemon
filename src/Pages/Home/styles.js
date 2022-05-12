import styled from "styled-components";

export const Container = styled.div`
  background-color: #323232;
  min-height: 90vh;
  padding: 40px;
  justify-content: space-between;
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

  .poke-item {
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #323232;
    font-weight: 700;
    text-transform: capitalize;

    img {
      max-width: 35px;
    }
  }
`;

export const SectionRight = styled.div`
  display: flex;
  justify-content: right;
`;

export const Pagination = styled.div`
  button:first-child {
    margin-right: 20px;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    opacity: 0.5;
    max-width: 100px;
  }
`;
