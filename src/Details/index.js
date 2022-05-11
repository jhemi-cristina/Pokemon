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
import pokemon from "Assets/pokemon.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { api, apiImages } from "Services/api";
import { convertName } from "./Functions/convertName";
import { getAbilities } from "./Functions/getAbilities";

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [pokeId, setPokeId] = useState(null);
  const [pokeImage, setPokeImage] = useState(null);
  const [abilities, setAbilities] = useState(null);

  async function getPokemonData() {
    const response = await api.get(`/${name}`);

    setPokemon(response.data);
    setPokeId(response.data.id);
  }
  console.log("DAta", pokemon);

  useEffect(() => {
    getPokemonData();
  }, []);

  useMemo(() => {
    if (pokeId) {
      setPokeImage(`${apiImages}/${pokeId}.svg`);
      setAbilities(getAbilities(pokemon));
    }
  }, [pokeId, pokemon]);

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
          Ir para o Próximo
          <FaChevronRight />
        </PageLink>
      </HeaderPage>

      <Content>
        <Title>{convertName(name ?? "Pokemon não identificado")}</Title>
        <Description>
          <PokeBox>
            <PokeImage
              src={
                pokeImage ||
                "https://olimpiada.fiocruz.br/wp-content/uploads/woocommerce-placeholder.png"
              }
              alt="Pokemon image"
            />
          </PokeBox>
          <PokeBox>
            <SubTitle>HABILIDADES:</SubTitle>
            <AbilityList>
              {abilities?.map((item) => (
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
