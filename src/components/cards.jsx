import { useState } from "react";
import "../styles/images.css";

export default function Cards({ img, title, description }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="img" src={img} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>

      {hovered && (
        <div className="comprar-olhar">
          <Name className="comprar">Comprar</Name>
          <Name className="olhar">Olhar</Name>
        </div>
      )}
    </article>
  );
}
function Name({ children, ...props }) {
  return (
    <button {...props}>
      <b>{children}</b>
    </button>
  );
}
