import React from 'react';
import Link from 'next/link';

export async function getStaticProps() {
  const pokemons = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Deu problema');
    })
    .then((respostaEmObjeto) => respostaEmObjeto.pokemon_entries);

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home(props) {
  const { pokemons } = props;

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #6AB7F5, #FFF)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
      <img
         src="../images/logo.png"
         alt="Logo do site"
        />
      </div>
      <p style={{
        textAlign: 'center',
        fontSize: '25px',
        margin: '30px 0 10px 0',
        fontWeight: '700'
      }}
      >
        Clique em um Pokémon para visualizá-lo na Pokédex.
      </p>

      <ul style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '80px',
        padding: '30px 8px'
      }}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.entry_number}>
            <Link href={`/pokemon/${pokemon.entry_number}`}>
              <a>
                <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
                alt={pokemon.pokemon_species.name}
                style={{
                  width: '130px'
                }}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
