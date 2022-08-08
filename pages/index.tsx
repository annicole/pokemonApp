import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import type { NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";
import { PokemonListResponse, SmallPokemon } from "../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons?.map(({ id, name, img }) => (
          <PokemonCard id={id} key={id} name={name} img={img} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export async function getStaticProps() {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  let pokemons: SmallPokemon[] = data?.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons: pokemons,
    }, // will be passed to the page component as props
  };
}

export default Home;
