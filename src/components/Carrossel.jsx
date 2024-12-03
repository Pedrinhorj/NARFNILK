import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ImagensCarrossel";
import imagecarrosselone from "../assets/images/imagecarroselone.jpg";
import imagecarrosseltwo from "../assets/images/imagecarrosseltwo.jpg";
import imagecarrosselthree from "../assets/images/imagecarrosselthree.jpg";
import "../styles/carrossel.css";

function UncontrolledExample() {
  return (
    <Carousel className="Carrossel-article">
      <Carousel.Item>
        <ExampleCarouselImage img={imagecarrosselone} />
        <Carousel.Caption>
          <h3>Filmes e Séries</h3>
          <p>Confira aqui nossas principais e mais dramáticas produções</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={imagecarrosseltwo} text="Second slide" />
        <Carousel.Caption>
          <h3>Musicas originais</h3>
          <p>
            Confira no spotify as nossas melhores e 100% originais músicas temas
            ou trilhas sonoras
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage img={imagecarrosselthree} text="Third slide" />
        <Carousel.Caption>
          <h3>Nossos quadrinhos</h3>
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
