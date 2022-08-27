import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { TextField } from '../../src/components/TextField';
import { Ball } from '../../src/components/Ball';

export default function Pokemon({ pokemon }) {
  return (
    <div>
      <main style={{
        height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(to bottom, #6AB7F5, #FFF)'
      }}>
        <div style={{
          width: '450px',
          height: '600px',
          backgroundColor: '#dd092d',
          borderRadius: '9px',
          border: '2x solid #3d040d'
        }}>
             <div style={{
              display: 'flex', alignItems: 'flex-start',
              borderBottom: '2px solid #3d040d'
             }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#176da2',
                  borderRadius: '50%',
                  border: '5px solid #e1e1e1',
                  margin: '15px'
                }}>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: '1rem'
                }}>
                  <Ball color='#FF0000' />
                  <Ball color='#f5e035' />
                  <Ball color='#5fab6c' />
                </div>
             </div>
            <div style={{
              width: '85%',
              height: '250px',
              backgroundColor: '#dedede',
              margin: '30px auto',
              borderRadius: '11px 11px 11px 55px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid #3d040d'
            }}>
                <div style={{
                  width: '90%',
                  height: '90%',
                  padding: '10px',
                  backgroundImage: 'url(../../images/pokemon-background.png)',
                  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                  borderRadius: '9px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center'
                }}>
                    <img style={{
                      width: '47.5%',
                      height: '47.5%'
                    }}
                    src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt="" 
                    />
                </div>
            </div>
            <div style={{
              width: '85%',
              backgroundColor: '#232323',
              padding: '16px',
              margin: '0 auto',
              borderRadius: '9px',
              border: '2px solid #dedede'
            }}>
                <TextField value={pokemon.name} type='NOME' />
                <TextField
                 value={pokemon.abilities.map((abilitie) => {
                  return ` ${abilitie.ability.name}.`
                 })}
                 type='SKILLS'
                />
                <div style={{
                  display: 'flex', justifyContent: 'center'
                }}
                >
                  <Link href="/">
                    <a style={{
                      padding: '12px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      backgroundColor: '#2fb7fe',
                      color: 'FEFEFE',
                      borderRadius: '9px'
                    }}
                    >
                      Escolher outro Pokémon
                    </a>
                  </Link>
                </div>
            </div>
        </div>
      </main>
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