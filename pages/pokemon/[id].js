import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  max-width: 200px;
  border-radius: 5px;
  background-color: #2a74ba;
  display: inline-block;

  :hover {
  box-shadow: 0 12px 24px 0 rgba(0,0,0,0.4);
  
}
`;
const Container = styled.div`
  background-color: rgba(0,0,0,0.3);
  border-radius: 0px 0px 5px 5px;
  text-align-last: center;
`;

const Image = styled.img`
  width: 100%;
`;

const Type = styled.div`
  background-color: #fff;
  border-radius: 15px;
  width: 40%;
  display: inline-block;
  margin: 0% 5% 5% 5%;
`;

const Name = styled.h4`
  color: white;
  margin: 0% 0% 3% 0%;
  padding-top: 2%;
`;

export default function Pokemon({ pokemon }) {
  return (
    <Card>
      <Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
      <Container className="container">
        <Name>{`#${pokemon.id} ${pokemon.name.slice(0, 1).toUpperCase()}${pokemon.name.slice(1)}`}</Name>
        {pokemon.types.map((types) => (
          <Type>{types.type.name}</Type>
        ))}
      </Container>
    </Card>
  );
}

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema');
    });

  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
  return {
    paths: pokemons.map((pokemon) => ({
      params: {
        id: pokemon.entry_number.toString(),
      },
    })),
    fallback: false,
  };
}
