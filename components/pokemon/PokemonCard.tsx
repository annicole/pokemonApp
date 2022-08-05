import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";

export const PokemonCard: FC<SmallPokemon> = ({ img, id, name }) => {

  const router= useRouter();

  const onClick = ()=>{
    console.log('entro')
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
