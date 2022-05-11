import styled from "styled-components";

export const Container = styled.div`
  background-color: #323232;
  min-height: 100vh;
  padding: 60px;
`;

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageLink = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 15px;

  svg {
    margin-right: 15px;
    margin-left: 15px;
  }
`;

export const Image = styled.img`
  display: flex;
  margin: 0 auto;
  width: 130px;
`;

export const Content = styled.div`
  margin-bottom: 50px;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const Description = styled.div`
  display: flex;
  /* justify-content: space-between; */
  div {
    min-width: 50%;
  }
`;

export const PokeImage = styled.img`
  border-radius: 20px;
  max-width: 100%;
`;

export const PokeBox = styled.div``;

export const AbilityList = styled.ul``;

export const AbilityListItem = styled.li``;

export const Footer = styled.div`
  opacity: 0.5;
`;
