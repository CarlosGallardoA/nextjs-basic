/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const Rickandmorty = ({ riki }) => {
  return (
    <StyledRickandmorty>
      {riki.map((api, index) => (
        <div key={api.index}>
          <h2>{api.name}</h2>
          <h3>Specie: {api.species}</h3>
          <img src={api.image} alt="" />
        </div>
      ))}
    </StyledRickandmorty>
  );
};
const StyledRickandmorty = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  text-align: center;
  color: #fff;

  div {
    background-color: #a4508b;
    background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
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
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=20"
    );
    const riki = await response.json();
    return {
      props: {
        riki: riki.results,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Rickandmorty;
