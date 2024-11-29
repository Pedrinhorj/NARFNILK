import React from "react";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import insta from "../assets/icons/Ícone-Instagram-PNG.png";
import "../styles/icons.css";

export default function Footer() {
  return (
    <footer>
      <h4>Nossas redes</h4>
      <div className="icons">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="" />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <TiSocialFacebook
            size={32}
            style={{
              color: "#2196f3",
              border: "#2196f3 solid 1px",
              borderRadius: "15px",
            }}
          />
        </a>

        <a href="http://" target="_blank" rel="noopener noreferrer">
          <TiSocialYoutube size={35} style={{ color: "red" }} />
        </a>
      </div>

      <h4>Fale conosco diretamente:</h4>
      <p>
        <a href="mailto: email.com">email.com</a>
      </p>
    </footer>
  );
}
