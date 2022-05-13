/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback } from "react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Input } from "Components/Input";
import { Card } from "Components/Card";
import { getParamsPage } from "./Functions/getParamsPage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Logo from "Assets/logo.svg";
import pokeball from "Assets/pokeball.png";
import {
  Container,
  Content,
  Footer,
  HeaderPage,
  Image,
  Pagination,
  PokeList,
  SectionRight,
  Title,
} from "./styles";
import { getPokemons } from "./Functions/getPokemons";
import { getPokemonsList } from "./Functions/getPokemonsList";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState("?offset=0&limit=50");
  const [previous, setPrevious] = useState(null);
  const [advance, setAdvance] = useState("?offset=50&limit=50");
  const [inputSearch, setInputSearch] = useState("");

  const pokemonsList = getPokemonsList(pokemons);

  const getNextAndPrevPokemons = useCallback((data) => {
    getPokemons({ filter: data, setPokemons, setPrevious, setNextPage });
  }, []);

  useMemo(() => {
    if (nextPage) setAdvance(getParamsPage(nextPage));
  }, [nextPage]);

  useEffect(() => {
    getNextAndPrevPokemons(prevPage);
  }, []);

  useEffect(() => {
    if (pokemons && previous) setPrevPage(getParamsPage(previous));
  }, [previous, pokemons]);

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
          <Input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Pesquise o nome ou Id do Pokemon ...."
          />
        </SectionRight>

        <PokeList>
          {pokemonsList
            ?.filter(
              (item) =>
                item?.name?.includes(inputSearch?.toLowerCase()) ||
                item?.id === Number(inputSearch)
            )
            ?.map((item) => (
              <Link to={`/details/${item?.id}`} key={item?.id}>
                <Card className="poke-item">
                  {item?.name} <img src={pokeball} alt="Pokebolla" />
                </Card>
              </Link>
            ))}
        </PokeList>
        <Footer>
          <img
            src={Logo}
            alt="Logo do Pokemon com a cor amarela e bordas azuis"
          />
          <Pagination>
            <button
              onClick={() => getNextAndPrevPokemons(prevPage)}
              disabled={pokemonsList[0]?.id === 1}
            >
              <FaArrowLeft />
            </button>
            {pokemonsList[0]?.id} {"-"}
            {pokemonsList[49]?.id}
            <button
              onClick={() => getNextAndPrevPokemons(advance)}
              disabled={pokemonsList[49]?.id === 10202}
            >
              <FaArrowRight />
            </button>
          </Pagination>
        </Footer>
      </Content>
    </Container>
  );
};

export { Home };
