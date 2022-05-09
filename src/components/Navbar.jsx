import "../style/Header.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
    const [toggleSidebar, setToggleSidebar] = useState(false);  
    return (
        <header>
            <div className="logo">
                <NavLink to="/"><img src="/images/ícones/B4.svg" alt="ícone do restaurante"/></NavLink>
            </div>  
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/oRestaurante">O Restaurante</NavLink></li>
                    <li><NavLink to="/Menu">Menu</NavLink></li>
                    <li><NavLink to="/Contactos">Contactos</NavLink></li>
                    <li className="reservations-btn"><NavLink to="/Reservas">Reservas</NavLink></li>
                </ul>  
            </nav>  
            <div className="hamburguer">
                <button 
                        type="button" 
                        onClick={() => {setToggleSidebar(true)}}>
                        <img src="/images/ícones/hamburguer.png" alt=""/>
                </button>
            </div>
           
            <div>
            {toggleSidebar && (
            
                <Sidebar/> 
            )}
            </div>
        </header>
    )
    
    
}
