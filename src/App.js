import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ORestaurante from './components/ORestaurante';
import Menu from './components/Menu';
import Contactos from './components/Contactos';
import Reservas from './components/Reservas';
import Footer from './components/Footer';


export default function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
            <Route index path="/" element={<Homepage/>}/>
            <Route path="/ORestaurante" element={<ORestaurante/>}/>
            <Route path="/Menu" element={<Menu/>} />   
           
            <Route path="/Contactos" element={<Contactos/>}/>
            <Route path="/Reservas" element={<Reservas/>}/>
        </Routes>
       
        
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

