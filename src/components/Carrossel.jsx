import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ImagensCarrossel";
import imagecarrosselone from "../assets/images/imagecarroselone.jpg";
import imagecarrosseltwo from "../assets/images/imagecarrosseltwo.jpg";
import imagecarrosselthree from "../assets/images/imagecarrosselthree.jpg";
import "../styles/carrossel.css";
import styled from "styled-components";

const H3 = styled.h3`
  border-radius: 7px;
  font-weight: 700;
  text-shadow: black 0 0 9px;
  background: rgba(0, 0, 0, 0.3);
  width: 8em;
`;

function UncontrolledExample() {
  return (
    <Carousel className="Carrossel-article">
      <Carousel.Item>
        <ExampleCarouselImage img={imagecarrosselone} />
        <Carousel.Caption className="text">
          <H3>Filmes e Séries</H3>
          <p>Confira aqui nossas principais e mais dramáticas produções</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={imagecarrosseltwo} text="Second slide" />
        <Carousel.Caption className="text">
          <H3>Musicas originais</H3>
          <p>
            Confira no spotify as nossas melhores e 100% originais músicas temas
            ou trilhas sonoras
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={imagecarrosselthree} text="Third slide" />
        <Carousel.Caption className="text">
          <H3> Nossos quadrinhos</H3>
          <p>
            Primordialmente temos como principal objetivo o entretenimento com
            nossas melhores histórias, confira aqui nossos destaques
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
