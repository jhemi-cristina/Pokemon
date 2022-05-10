import { Container, HeaderPage, Image, Title } from "./styles";
import Logo from "Assets/logo.svg";

const Home = () => {
  return (
    <Container>
      <HeaderPage>
        <Image
          src={Logo}
          alt="Logo do Pokemon com a cor amarela e bordas azuis"
          className="logo"
        />

        <Title>Lista de Pokemons</Title>
      </HeaderPage>
    </Container>
  );
};

export { Home };
