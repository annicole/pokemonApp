import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

interface FavoriteCardPokemonProps {
  id: number;
}

const FavoriteCardPokemon: FC<FavoriteCardPokemonProps> = ({ id }) => {
 
  const router = useRouter();

  const goToPokemonPage = () =>{
    router.push(`/pokemon/${id}`);
  }
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={goToPokemonPage}>
      <Card isHoverable css={{ padding: 10 }} >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={140}
        ></Card.Image>
      </Card>
    </Grid>
  );
};

export default FavoriteCardPokemon;
