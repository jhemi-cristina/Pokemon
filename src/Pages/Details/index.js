/* eslint-disable react-hooks/exhaustive-deps */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  AbilityList,
  AbilityListItem,
  Button,
  Container,
  Content,
  Description,
  HeaderPage,
  Image,
  ImageLogo,
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
import pokeball from "Assets/pokeball.png";
import { useCallback } from "react";

function Details() {
  const { id } = useParams();
  const [pokeName, setPokeName] = useState(null);
  const [pokemon, setPokemon] = useState({});
  const [pokeImage, setPokeImage] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [variations, setVariations] = useState(null);
  const [variationsList, setVariationsList] = useState(null);
  const [loader, setLoader] = useState(true);

  const getPokemonData = useCallback(async () => {
    const response = await api.get(`/pokemon/${id}`);

    setPokemon(response?.data);
    setPokeName(response?.data?.name);
  }, [id]);
  // console.log("DAta", pokemon);

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
    }
  }, [variations]);

  function pageReplace() {
    window.location.replace();
    getPokemonData();
  }

  useEffect(() => {
    getPokemonData();
    loaderImage(setLoader);
  }, [id]);

  return (
    <Container>
      <HeaderPage>
        <ImageLogo>
          <Link to="/">
            <Image
              src={Logo}
              alt="Logo do Pokemon com a cor amarela e bordas azuis"
              className="logo"
            />
          </Link>
        </ImageLogo>

        <PageLink>
          <Link to={`/details/${Number(id) - 1}`}>
            {/* <Button disabled={id === "1"} onClick={() => getPokemonData()}> */}
            <Button disabled={id === "1"} onClick={() => pageReplace()}>
              <FaChevronLeft />
              Ver anterior
            </Button>
          </Link>
          <Link to={`/details/${Number(id) + 1}`} onClick={() => pageReplace()}>
            <Button>
              Ir para o Próximo
              <FaChevronRight />
            </Button>
          </Link>
        </PageLink>
      </HeaderPage>

      <Content>
        <Title>{convertName(pokeName ?? "Pokemon não identificado")}</Title>
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
                <AbilityListItem key={item?.id}>
                  <img src={pokeball} alt="Pokebolla" /> {item?.name}
                </AbilityListItem>
              ))}
            </AbilityList>
            {variationsList?.length !== 0 ? (
              <SubTitle>Variações:</SubTitle>
            ) : null}
            <AbilityList>
              {variationsList?.map((item) => (
                <AbilityListItem key={item?.id}>
                  <img src={pokeball} alt="Pokebolla" /> {item?.name}
                </AbilityListItem>
              ))}
            </AbilityList>
          </PokeBox>
        </Description>
      </Content>
    </Container>
  );
}

export { Details };
