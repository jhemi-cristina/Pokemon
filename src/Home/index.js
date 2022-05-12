/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useMemo } from "react";
import { Input } from "Components/Input";
import { Card } from "Components/Card";
import { getParamsPage } from "./Functions/getParamsPage";
import Logo from "Assets/logo.svg";
import pokeball from "Assets/pokeball.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
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
import { Link } from "react-router-dom";
import { getPokemons } from "./Functions/getPokemons";

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

  useMemo(() => {
    if (nextPage) setAdvance(getParamsPage(nextPage));
  }, [nextPage]);

  console.log("nextPage", nextPage);
  useMemo(() => {
    if (previous) setPrevPage(getParamsPage(previous));
  }, [previous]);

  useEffect(() => {
    getNextAndPrevPokemons(advance);
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
              (item, index) =>
                item?.name?.includes(inputSearch?.toLowerCase()) ||
                index + 1 === Number(inputSearch)
            )
            ?.map((item, index) => (
              <Link to={`/details/${index + 1}`} key={index}>
                <Card className="poke-item">
                  {item["name"]} <img src={pokeball} />
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
