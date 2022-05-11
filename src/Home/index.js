import { useState, useEffect } from "react";
import {
  Container,
  Content,
  HeaderPage,
  Image,
  PokeList,
  Title,
} from "./styles";
import { Input } from "Components/Input";
import { Card } from "Components/Card";
import Logo from "Assets/logo.svg";
import { api } from "Services/api";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previPage, setPreviPage] = useState(null);

  // previous e next São as páginas anterior e proxima

  async function getPokemons() {
    const {
      data: { results, previous, next },
    } = await api.get("/?offset=50&limit=50");
    setPokemons(results);
    setNextPage(next);
    setPreviPage(previous);
  }

  console.log("pokeResponse", pokemons);

  useEffect(() => {
    getPokemons();
  }, []);
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

      <Content>
        <Input />

        <PokeList>
          {pokemons.map((item, index) => (
            <Card key={index} margin="20px">
              {item.name}
            </Card>
          ))}
        </PokeList>
      </Content>
    </Container>
  );
};

export { Home };
