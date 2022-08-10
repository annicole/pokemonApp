import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/UI";
import FavoritesPokemons from "../../components/UI/FavoritesPokemons";
import { localFavorites } from "../../utils";

function Favorites() {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
}

export default Favorites;
