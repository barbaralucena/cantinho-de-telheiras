import "../style/Header.css";
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <header>
            <div className="logo">
                <h1 className="titles"><NavLink to="/">O Cantinho de Telheiras</NavLink></h1>
                <p className="subtitle"><NavLink to="/">Comida Tradicional Portuguesa</NavLink>
                </p>
            </div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/oRestaurante">O Restaurante</NavLink></li>
                    <li><NavLink to="/Menu">Menu</NavLink></li>
                    <li><NavLink to="/Contactos">Contactos</NavLink></li>
                    <li className="reservations-btn"><NavLink to="/Reservas">Reservas</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}