import { api } from "Services/api";
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { Input } from "Components/Input";
import { Card } from "Components/Card";
import { getParamsPage } from "./Functions/getParamsPage";
import Logo from "Assets/logo.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  HeaderPage,
  Image,
  PokeList,
  SectionRight,
  SectionSearch,
  Title,
} from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState("?offset=0&limit=50");
  const [previous, setPrevious] = useState(null);
  const [advance, setAdvance] = useState("?offset=50&limit=50");
  const [search, setSearch] = useState("");

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
        <SectionRight>
          <Input placeholder="Pesquise o Pokemon desejado...." />
        </SectionRight>

        <PokeList>
          {pokemons?.map((item, index) => (
            <Link to="/details" key={index}>
              <Card className="poke-item">{item["name"]}</Card>
            </Link>
          ))}
        </PokeList>
        <SectionRight>
          <button
            onClick={() => getPrevPokemons()}
            disabled={prevPage === "?offset=0&limit=50"}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => getNextPokemons()}
            disabled={advance === "?offset=1100&limit=26"}
          >
            <FaArrowRight />
          </button>
        </SectionRight>
      </Content>
    </Container>
  );
};

export { Home };
