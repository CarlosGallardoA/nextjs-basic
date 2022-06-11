/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
const Pokemons = ({ data }) => {
  return (
    <StyledPokemon>
      {data.map((pokemon, index) => (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              index + 1
            }.png`}
            alt={pokemon.name}
            width="200"
            height="200"
          />
        </div>
      ))}
    </StyledPokemon>
  );
};

const StyledPokemon = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  text-align: center;
  color: #fff;

  div {
    background-color: #42378f;
    background-image: linear-gradient(315deg, #42378f 0%, #f53844 74%);
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 5px black;
    .h3 {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    img {
      border-radius: 50%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;
export async function getServerSideProps() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    return {
      props: {
        data: data.results,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Pokemons;
