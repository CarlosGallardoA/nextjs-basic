import Navbar from "./Navbar";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <Contenedor>
      <Navbar />
      <div className="son">{children}</div>
      <footer>
        <div>
          <p>Carlos Enrique Gallardo Ambrosio</p>
        </div>
      </footer>
    </Contenedor>
  );
};
const Contenedor = styled.div`
  .son {
    margin-top: 10px;
  }
  footer {
    div {
      text-align: center;
      font-size: 1.2em;
      width: 100%;
      height: 100%;
    }
  }
`;
export default Layout;
