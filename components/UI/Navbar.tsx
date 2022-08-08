import { Spacer, Text, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const onClick = (path: string) => {
    router.push(path);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 50px",
        backgroundColor: theme?.colors.gray300.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/132.png"
        alt="icono de la app"
        width={70}
        height={70}
        onClick={() => onClick("/")}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            ókemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Link>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
