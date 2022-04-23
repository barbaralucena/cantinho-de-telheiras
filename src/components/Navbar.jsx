import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1><NavLink to="/">O Cantinho de Telheiras</NavLink></h1>
            <p><NavLink to="/">Comida Tradicional Portuguesa</NavLink></p>
            <ul>
                <li><NavLink to="/oRestaurante">O Restaurante</NavLink></li>
                <li><NavLink to="/Menu">Menu</NavLink></li>
                <li><NavLink to="/Contactos">Contactos</NavLink></li>
                <li><NavLink to="/reservasOnline">Reservas Online</NavLink></li>
            </ul>
        </nav>
    );
}