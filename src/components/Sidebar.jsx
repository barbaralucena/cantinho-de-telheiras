import { NavLink } from 'react-router-dom';
import "../style/Sidebar.css";
import { useState } from 'react';
export default function Sidebar(){
   const [toggleSidebar, setToggleSidebar] = useState(true); 
   return(
      <div>
     {toggleSidebar && (
         <nav className= "sidebar">     
         <ul>
         <button className="close"
         type="button" 
         onClick={() => {setToggleSidebar(false)}}>
         <img src="/images/ícones/sidebar.png" alt=""/>
         </button>
            <li className="first-li"  onClick={() => {setToggleSidebar(false)}}><NavLink to="/oRestaurante">O Restaurante</NavLink></li>
            <li onClick={() => {setToggleSidebar(false)}}><NavLink to="/Menu">Menu</NavLink></li>
            <li onClick={() => {setToggleSidebar(false)}}><NavLink to="/Contactos">Contactos</NavLink></li>
            <li className="reservations-btn" onClick={() => {setToggleSidebar(false)}}><NavLink to="/Reservas">Reservas</NavLink></li>  
         </ul> 
        
      </nav> 
     )}
     </div>
   )}
     
  