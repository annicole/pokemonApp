import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../UI";

interface Props {
  title?:string;
  children:JSX.Element
}

export const Layout:FC<Props> = ({ title,children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Nicole Rosas" />
        <meta name="keywords" content="XXXX,pokemon,pokedex" />
      </Head>
      <Navbar />
      <main style={{
        padding:'10px'
      }}>{children}</main>
    </>
  );
};
