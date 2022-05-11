import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Ability,
  AbilityList,
  AbilityListItem,
  Container,
  Content,
  Description,
  Footer,
  HeaderPage,
  Image,
  PageLink,
  PokeBox,
  PokeImage,
  SubTitle,
  Title,
} from "./styles";
import Logo from "Assets/logo.svg";
import pokemon from "Assets/pokemon.svg";

const Details = () => {
  return (
    <Container>
      <HeaderPage>
        <PageLink>
          <FaChevronLeft />
          Voltar
        </PageLink>
        <PageLink>
          Ir para o Próximo
          <FaChevronRight />
        </PageLink>
      </HeaderPage>

      <Content>
        <Title>Pikachu</Title>
        <Description>
          <PokeBox>
            <PokeImage src={pokemon} alt="Pokemon image" />
          </PokeBox>
          <PokeBox>
            <SubTitle>HABILIDADES:</SubTitle>
            <AbilityList>
              <AbilityListItem>Força: 10</AbilityListItem>
              <AbilityListItem>Agilidade: 10</AbilityListItem>
              <AbilityListItem>Força: 10</AbilityListItem>
              <AbilityListItem>Agilidade: 10</AbilityListItem>
            </AbilityList>
          </PokeBox>
        </Description>
      </Content>

      <Footer>
        <Image
          src={Logo}
          alt="Logo do Pokemon com a cor amarela e bordas azuis"
          className="logo"
        />
      </Footer>
    </Container>
  );
};

export { Details };
