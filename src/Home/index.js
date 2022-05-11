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
import { getParamsPage } from "./Functions/getParamsPage";
import { useMemo } from "react";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState("?offset=0&limit=50");
  const [previous, setPrevious] = useState(null);
  const [advance, setAdvance] = useState("?offset=50&limit=50");

  async function getPrevPokemons() {
    const {
      data: { results, previous, next },
    } = await api.get(`/${prevPage}`);
    setPokemons(results);
    setPrevious(previous);
    setNextPage(next);
  }

  async function getNextPokemons() {
    const {
      data: { results, previous, next },
    } = await api.get(`/${advance}`);
    setPokemons(results);
    setPrevious(previous);
    setNextPage(next);
  }

  useMemo(() => {
    if (nextPage) setAdvance(getParamsPage(nextPage));
  }, [nextPage]);

  useMemo(() => {
    if (previous) setPrevPage(getParamsPage(previous));
  }, [previous]);

  // console.log("previous", previous);
  // console.log("nextPage", nextPage);

  useEffect(() => {
    getNextPokemons();
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
          {pokemons?.map((item, index) => (
            <Card key={index} margin="20px">
              {item.name}
            </Card>
          ))}
        </PokeList>
        <button
          onClick={() => getPrevPokemons()}
          disabled={prevPage === "?offset=0&limit=50"}
        >
          {"<"}
        </button>
        <button
          onClick={() => getNextPokemons()}
          disabled={advance === "?offset=1100&limit=26"}
        >
          {">"}
        </button>
      </Content>
    </Container>
  );
};

export { Home };
