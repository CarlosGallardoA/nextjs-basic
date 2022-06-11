import React from "react";
import Link from "next/link";
import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <Nav>
        <h1>
          <Link href="/pokemons" className="title_nav">
            Pokemons
          </Link>
        </h1>
        <Items>
          <h1>
            <Link href="/rickandmorty" className="app">
              Rick and Morty
            </Link>
          </h1>
        </Items>
      </Nav>
    </>
  );
};

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .app {
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;
    text-transform: uppercase;
    &:hover {
      color: #767474;
    }
  }
  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #000;
  color: #fff;
  height: 60px;
  align-items: center;
  .title_nav {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #767474;
    }
  }
`;
export default Navbar;
