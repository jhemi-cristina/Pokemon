/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
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
import { getPokeId } from "./Functions/getPokeId";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState("?offset=0&limit=50");
  const [previous, setPrevious] = useState(null);
  const [advance, setAdvance] = useState("?offset=50&limit=50");
  const [inputSearch, setInputSearch] = useState("");

  function getNextAndPrevPokemons(data) {
    getPokemons({ filter: data, setPokemons, setPrevious, setNextPage });
  }

  console.log("pokemons", pokemons);
  useMemo(() => {
    if (nextPage) setAdvance(getParamsPage(nextPage));
  }, [nextPage]);

  console.log("nextPage", nextPage);
  useMemo(() => {
    if (previous) setPrevPage(getParamsPage(previous));
  }, [previous]);

  useEffect(() => {
    getNextAndPrevPokemons(prevPage);
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
          <Input
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Pesquise o nome ou Id do Pokemon ...."
          />
        </SectionRight>

        <PokeList>
          {pokemons
            ?.filter(
              (item) =>
                item?.name?.includes(inputSearch?.toLowerCase()) ||
                getPokeId(item.url) === Number(inputSearch)
            )
            ?.map((item) => (
              <Link
                to={`/details/${getPokeId(item.url)}`}
                key={getPokeId(item.url)}
              >
                {console.log(getPokeId(item.url))}
                <Card className="poke-item">
                  {item.name} <img src={pokeball} alt="Pokebolla" />
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
              disabled={prevPage === "?offset=0&limit=50"}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => getNextAndPrevPokemons(advance)}
              disabled={advance === "?offset=1100&limit=26"}
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
