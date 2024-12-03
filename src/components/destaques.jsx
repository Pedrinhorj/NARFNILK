import Cards from "./cards";
import bookone from "../assets/images/Sem Título-1.png";
import booktwo from "../assets/images/booktwo.png";
import bookthree from "../assets/images/bookthree.png";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: start;
  font-size: 2.3em;
  border-right: #003af7 solid 8px;
  width: 14em;
`;

export default function Destaques() {
  return (
    <div>
      <H1>Nossos principais destaques</H1>
      <div className="Destaques-main">
        <Cards img={bookone} title={"Livro um"} description={"R$39,98"} />
        <Cards img={booktwo} title={"Livro dois"} description={"R$39,99"} />
        <Cards img={bookthree} title={"Livro tres"} description={"R$39,99"} />
      </div>
      <br />
    </div>
  );
}
