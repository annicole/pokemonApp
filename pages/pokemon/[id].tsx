import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import * as React from "react";
import { Layout } from "../../components/layouts";
import { GetStaticPaths } from 'next'
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";

interface Props{
   pokemon:Pokemon;
}


const PokemonPage:NextPage<Props>= ({pokemon}) => {
  const router = useRouter();

  return (
    <Layout title="nose">
      <h1>{pokemon.name}</h1>
    </Layout>
  );
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async () => {
    
    const pokemon151 = [...Array(151)].map((value,index)=> `${index +1}`)
    return {
       paths: pokemon151.map(id=>({
        params:{id}
       }))
        ,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params})=> {

    const {id} = params as {id:string};

    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
    return {
      props: {
        pokemon:data
      }, // will be passed to the page component as props
    };
  }

export default PokemonPage;
