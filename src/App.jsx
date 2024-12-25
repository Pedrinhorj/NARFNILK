import "./styles/App.css";
import Footer from "./components/footer";
import { FaSearch } from "react-icons/fa";
import Destaques from "./components/destaques";
import logo from "./assets/images/Logo-title-option3.png";
import UncontrolledExample from "./components/Carrossel";
import Acordion from "./components/acordion";
import Services from "./components/services";
import Navmenu from "./components/Nav-menu";

function App() {
  return (
    <>
      <header>
        <div className="container-header-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>

        <div className="search">
          <input
            type="text"
            name="search"
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <FaSearch size={25} />
          </button>
        </div>

        <Services />

        <Navmenu />
      </header>

      <main>
        <br />
        <section className="container1">
          <h2>Seja bem vindo(a) a NARFNILK!!</h2>
          <UncontrolledExample />
        </section>

        <section className="container2">
          <br />
          <Acordion />
          <br />
        </section>
        <section className="container3">
          <Destaques />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
