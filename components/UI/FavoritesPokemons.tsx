import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { FC } from "react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

interface Props {
  favoritePokemons: number[];
}

let FavoritesPokemons: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favoritePokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritesPokemons;
