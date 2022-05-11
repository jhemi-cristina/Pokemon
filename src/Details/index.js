/* eslint-disable react-hooks/exhaustive-deps */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
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
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { api, apiImages } from "Services/api";
import { convertName } from "./Functions/convertName";
import { getAbilities } from "./Functions/getAbilities";
import { getVariations } from "./Functions/getVariations";
import { Loader } from "Components/Loader";
import { loaderImage } from "./Functions/loader";

const Details = () => {
  // const history = useHistory();
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  // const [pokeId, setPokeId] = useState(null);
  const [pokeImage, setPokeImage] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [variations, setVariations] = useState(null);
  const [variationsList, setVariationsList] = useState(null);
  const [loader, setLoader] = useState(true);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  async function getPokemonData() {
    const response = await api.get(`/pokemon/${id}`);

    setPokemon(response.data);
    // setPokeId(response.data.id);
  }
  // console.log("DAta", pokemon);

  useEffect(() => {
    getPokemonData();
    loaderImage(setLoader);
  }, []);

  useEffect(() => {
    if (nextPage) getPokemonData();
  }, [nextPage]);

  async function getPokemonsVariantions() {
    const response = await api.get(`/evolution-chain/${id}`);
    setVariations(response?.data.chain.evolves_to);
  }

  useMemo(() => {
    if (id) {
      setPokeImage(`${apiImages}/${id}.svg`);
      setAbilities(getAbilities(pokemon));
      getPokemonsVariantions();
    }
  }, [id, pokemon]);

  useMemo(() => {
    if (id && variations) {
      setVariationsList(getVariations(variations));
      // setNextPage(id + 1);
    }
  }, [variations]);

  function teste() {
    // setNextPage(id + 1);
    // window.location.replace();
    // history.push("/details/2");
  }

  console.log({ id, nextPage });
  return (
    <Container>
      <Footer>
        <Link to="/">
          <Image
            src={Logo}
            alt="Logo do Pokemon com a cor amarela e bordas azuis"
            className="logo"
          />
        </Link>
      </Footer>
      <HeaderPage>
        <PageLink>
          <Link to="/">
            <FaChevronLeft />
            Voltar
          </Link>
        </PageLink>
        <PageLink>
          <div onClick={() => teste()}>
            Ir para o Próximo
            <FaChevronRight />
          </div>

          {/* <Link to={`/details/${nextPage}`}>Teste {nextPage}</Link> */}
        </PageLink>
      </HeaderPage>

      <Content>
        <Title>
          {convertName(pokemon?.name ?? "Pokemon não identificado")}
        </Title>
        <Description>
          <PokeBox>
            {loader ? (
              <Loader />
            ) : (
              <PokeImage
                src={
                  pokeImage ||
                  "https://olimpiada.fiocruz.br/wp-content/uploads/woocommerce-placeholder.png"
                }
                alt="Pokemon image"
              />
            )}
          </PokeBox>
          <PokeBox>
            <SubTitle>HABILIDADES:</SubTitle>
            <AbilityList>
              {abilities?.map((item) => (
                <AbilityListItem key={item?.id}>{item?.name}</AbilityListItem>
              ))}
            </AbilityList>
            {variationsList?.length !== 0 ? (
              <SubTitle>Variações:</SubTitle>
            ) : null}
            <AbilityList>
              {variationsList?.map((item) => (
                <AbilityListItem key={item?.id}>{item?.name}</AbilityListItem>
              ))}
            </AbilityList>
          </PokeBox>
        </Description>
      </Content>
    </Container>
  );
};

export { Details };
