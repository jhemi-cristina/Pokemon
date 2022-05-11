import styled from "styled-components";

export const Container = styled.div`
  background-color: #323232;
  min-height: 60vh;
  padding: 60px;
`;

export const HeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
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

export const Title = styled.h1`
  margin-bottom: 70px;
  font-size: 50px;
  color: #ffcb05;
`;

export const SubTitle = styled.h2`
  margin-bottom: 30px;
`;

export const Description = styled.div`
  display: flex;
  /* justify-content: space-between; */
  div {
    min-width: 50%;
  }
`;

export const PokeImage = styled.img`
  border-radius: 20px;
  max-width: 300px;
  width: 100%;
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
`;

export const Footer = styled.div`
  opacity: 0.5;
`;
