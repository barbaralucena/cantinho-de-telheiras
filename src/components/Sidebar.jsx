import { NavLink } from 'react-router-dom';
import "../style/Sidebar.css";

export default function Sidebar(props){
   return(
      <div>
         <nav className= "sidebar">  
            <div className="close-sidebar">
               <button
                  type="button" 
                  onClick={() => {props.setState(currentState => !currentState)}}>
                  <img src="/images/ícones/sidebar.svg" alt="fechar o menu"/>
               </button>
            </div>   
            <ul>
               <li 
                  className="first-li"  
                  onClick={() => {props.setState(currentState => !currentState)}}>
                  <NavLink to="/oRestaurante"> O Restaurante </NavLink>
               </li>
               <li 
                  onClick={() => {props.setState(currentState => !currentState)}}>
                  <NavLink to="/Menu"> Menu </NavLink>
               </li>
               <li 
                  onClick={() => {props.setState(currentState => !currentState)}}>
                  <NavLink to="/Contactos">Contactos</NavLink>
               </li>
               <li 
                  className="reservations-btn" 
                  onClick={() => {props.setState(currentState => !currentState)}}>
                  <NavLink to="/Reservas">Reservas</NavLink>
               </li>  
            </ul> 
         </nav> 
     </div>
   )}
     
  