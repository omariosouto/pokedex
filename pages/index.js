import React from 'react';
import Link from 'next/link';
import {
  Container, Card, CardName, CardDescription, CardType, CardImage,
} from './_app';

export async function getPokemons() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema na pokedex');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);
  return pokemons;
}

export async function getStaticProps() {
  const lista = await getPokemons();
  const pokemons = await lista.map(async (pokemon) => {
    const pokemonJson = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.entry_number}/`)
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }

        throw new Error('Erro na captura de pokemons');
      });
    return pokemonJson;
  });
  const pokedex = await (async () => {
    const resultado = await Promise.all(pokemons);
    return resultado;
  })();
  return {
    props: {
      pokedex,
    },
  };
}

export default function Home(props) {
  const { pokedex } = props;

  return (
    <div>
      Pokédex - DevSoutinho - Da um like :)
      {' '}
      <br />
      Branch  - octaviolage
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <a>Sobre o projeto</a>
          </Link>
        </li>
      </ul>
      <Container>
        {pokedex.map((pokemon) => (
          <Link href={`/pokemon/${pokemon.id}`}>
            <a>
              <Card key={pokemon.id + pokemon.name}>
                <CardImage src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                <CardDescription className="container">
                  <CardName>{`#${pokemon.id} ${pokemon.name.slice(0, 1).toUpperCase()}${pokemon.name.slice(1)}`}</CardName>
                  {pokemon.types.map((types) => (
                    <CardType type={types.type} />
                  ))}
                </CardDescription>
              </Card>
            </a>
          </Link>
        ))}
      </Container>
    </div>
  );
}
