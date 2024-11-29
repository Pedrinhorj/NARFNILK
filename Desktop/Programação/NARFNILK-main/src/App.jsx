import "./App.css";
import Footer from "./components/footer";
import { FaSearch } from "react-icons/fa";
import Destaques from "./components/destaques";
import logo from "./assets/images/Logo-title-option3.png";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

function App() {
  return (
    <>
      <header>
        <div className="container-header-1">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img className="logo" src={logo} alt="" />
          </a>

          <div className="services">
            <button>
              <LuShoppingCart size={50} />
            </button>
            <button>
              <CgProfile size={50} />
            </button>
          </div>
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
        <nav>
          <span>Nossa Página de Música</span>

          <span>Nossos Filmes/Séries</span>

          <span>Nossos Livros/HQs</span>

          <span>Nossos Games</span>
        </nav>
      </header>

      <main>
        <section className="container1">
          <h1>Carrossel</h1>
        </section>

        <section className="container2">Acordion</section>
        <section className="container3">
          <Destaques />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
