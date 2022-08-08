import { Container, Text } from "@nextui-org/react";
import Image from "next/image";
import { Layout } from "../../components/layouts";

function Favorites() {
  return (
    <Layout>
      <Container css={{
        display:'flex',
        flexDirection:'column',
        height:'calc(100vh-100px)',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
      }}>
        <Text h1>No hay favoritos</Text>
        <Image 
        src=""
        width={250}
        height={250}
        />
      </Container>
    </Layout>
  );
}

export default Favorites;
