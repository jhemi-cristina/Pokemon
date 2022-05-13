import styled from "styled-components";

export const Container = styled.div`
  background-color: #323232;
  min-height: 90vh;
  padding: 50px;
`;

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 101px;

  @media (max-width: 630px) {
    max-width: 100%;
    min-width: 230px;
    margin-bottom: 50px;
  }
`;

export const PageLink = styled.div`
  display: flex;
  gap: 100px;

  @media (max-width: 630px) {
    max-width: 100%;
    min-width: 230px;
    display: flex;
    justify-content: space-between;
    gap: inherit;

    Button {
      padding: 3px;
      margin: 10px;
    }
  }
`;

export const Image = styled.img`
  display: flex;
  margin: 0 auto;
  width: 130px;

  @media (max-width: 630px) {
    display: none;
  }
`;

export const Content = styled.div`
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  margin-bottom: 70px;
  font-size: 40px;
  color: #ffcb05;
  text-align: center;
`;

export const SubTitle = styled.h2`
  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;

  div {
    min-width: 20%;
  }

  @media (max-width: 700px) {
    max-width: 100%;
    min-width: 230px;
    display: block;
  }
`;

export const PokeImage = styled.img`
  border-radius: 20px;
  max-width: 300px;
  width: 100%;

  @media (max-width: 630px) {
    width: 50%;
  }
`;

export const PokeBox = styled.div`
  color: #ffffff;

  svg {
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
  }
`;

export const AbilityList = styled.ul`
  padding-left: 15px;
`;

export const AbilityListItem = styled.li`
  line-height: 40px;
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    max-width: 25px;
  }
`;

export const Button = styled.button`
  border-radius: 10px;
  padding: 5px;
  background-color: #babac0;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ImageLogo = styled.div``;
