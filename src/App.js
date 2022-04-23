import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderInfo from './components/HeaderInfo';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ORestaurante from './components/ORestaurante';
import Menu from './components/Menu';
import Contactos from './components/Contactos';
import ReservasOnline from './components/ReservasOnline';
import Footer from './components/Footer'

export default function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <HeaderInfo/>
        <Navbar />
        <Routes>
            <Route index path="/" element={<Homepage/>}/>
            <Route path="/oRestaurante" element={<ORestaurante/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Contactos" element={<Contactos/>}/>
            <Route path="/reservasOnline" element={<ReservasOnline/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

