import { useState } from "react";
import bookone from "../assets/images/Sem Título-1.png";
import booktwo from "../assets/images/booktwo.png";
import bookthree from "../assets/images/bookthree.png";
import "../styles/images.css";

export default function Destaques() {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <h1>Nossos principais destaques</h1>
      <div className="Destaques-main">
        <article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img className="img" src={bookone} alt="" />
          <h2>Book one</h2>

          <p>R$39,00</p>
          <hr />

          {hovered && (
            <div className="comprar-olhar">
              <button className="comprar">COMPRAR</button>
              <button className="olhar">OLHAR</button>
            </div>
          )}
        </article>
        <article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img className="img" src={booktwo} alt="" />
          <h2>Book Two</h2>

          <p>R$39,00</p>
          <hr />

          {hovered && (
            <div className="comprar-olhar">
              <button className="comprar">COMPRAR</button>
              <button className="olhar">OLHAR</button>
            </div>
          )}
        </article>
        <article
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img className="img" src={bookthree} alt="" />
          <h2>Book one</h2>

          <p>R$39,00</p>
          <hr />

          {hovered && (
            <div className="comprar-olhar">
              <button className="comprar">COMPRAR</button>
              <button className="olhar">OLHAR</button>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
