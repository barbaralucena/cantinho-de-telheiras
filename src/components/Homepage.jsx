import "../style/Homepage.css"
import Slideshow from "./Slideshow";
import HeaderInfo from "./HeaderInfo";
import { NavLink } from "react-router-dom";

export default function Homepage(){
    return( 
           <div className="homepage"> 
                <div className="header-info">
                   <HeaderInfo/>
                </div>
                <main>
                    <Slideshow/>
                </main>
                <div className="apresentação">
                <div className="sobre-nós">
                    <h2>Espaço humilde onde reina a tradição da cozinha portuguesa. <br/>
                    Por outras palavras, a verdadeira "comida caseira".</h2>
                    <button type="button"><NavLink to="/oRestaurante">Sobre Nós</NavLink>
                    </button>
                </div>
                <div className="o-nosso-menu">
                    <h2>Conheça o nossos pratos</h2>
                    <button type="button"><NavLink to="/Menu">O nosso menu</NavLink>
                    </button>
                </div>
                <div className="localização">
                    <h2>Onde estamos e como nos pode contactar</h2>
                    <button type="button"><NavLink to="/Contactos">Localização e Contactos</NavLink></button>
                </div>
                <div className="reserve-já">
                    <h2>Faça a sua reserva online aqui:</h2>
                    <button type="button"><NavLink to ="/Reservas">Reserve já</NavLink></button>
                </div>
                </div>
           </div>
    )
}

