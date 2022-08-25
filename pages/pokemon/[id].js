import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <h1>
        {pokemon.name}
      </h1>
      <img src={pokemon.sprites.front_default} alt={`Imagem do pokémon ${pokemon.name}`} />
      <Link href="/">
        <a>Escolher outro Pokémon</a>
      </Link>
    </div>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }),
  }).isRequired,
};

export async function getStaticProps({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      pokemon,
    },
  };
}

async function getPokemons() {
  try {
    const request = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    const response = await request.json()
    const pokemons = await response.pokemon_entries
    return pokemons
  }
  catch(error) {
    console.log(error)
  }
}

export async function getStaticPaths() {
  let pokemons = await getPokemons()
  const paths = pokemons.map((pokemon) => {
    return {
      params: {
        id: `${pokemon.entry_number}`
      }
    }
  })
  return {
    paths,
    fallback: false,
  };
}