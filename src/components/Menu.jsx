import "../styles/Menu.css";
import { useState, useEffect } from "react";
import {PratosdeCarne, PratosdePeixe, Petiscos, Sobremesas} from "../data/menu-data";
import {ImagensPratosdeCarne, ImagensPratosdePeixe, ImagensPetiscos, ImagensSobremesas} from "../data/menu-images";

export default function Menu(){
    const [filter,setFilter] = useState('PRATOS-DE-CARNE')
    const [products, setProducts] = useState(PratosdeCarne)
    const [images, setImages] = useState(ImagensPratosdeCarne)
    useEffect(()=>{
        if(filter === 'PRATOS-DE-CARNE'){
            setProducts(PratosdeCarne)
            setImages(ImagensPratosdeCarne)
        }
        if(filter === 'PRATOS-DE-PEIXE'){
            setProducts(PratosdePeixe)
            setImages(ImagensPratosdePeixe)
        }
        if(filter === 'PETISCOS'){
            setProducts(Petiscos)
            setImages(ImagensPetiscos)
        }
        if(filter === 'SOBREMESAS'){
            setProducts(Sobremesas)
            setImages(ImagensSobremesas)
        }
    },[filter])
    return(
        <div className="menu">
            <header>
                <h1>O nosso menu</h1> 
                <p>(A oferta de pratos varia diariamente)</p>
            </header>
            <div className="menu-container">
                <div className="menu-nav">
                <button 
                className={`filter-btn ${filter === 'PRATOS-DE-CARNE'?'active-btn' : ''}`} 
                onClick={()=> setFilter('PRATOS-DE-CARNE')}>Pratos de Carne</button>
                <button  className={`filter-btn ${filter === 'PRATOS-DE-PEIXE'?'active-btn' : ''}`}   onClick={()=> setFilter('PRATOS-DE-PEIXE')}>Pratos de Peixe</button>
                <button  className={`filter-btn ${filter === 'PETISCOS'?'active-btn' : ''}`} onClick={()=> setFilter('PETISCOS')}>Petiscos</button>
                <button  className={`filter-btn ${filter === 'SOBREMESAS'?'active-btn' : ''}`}  onClick={()=> setFilter('SOBREMESAS')}>Sobremesas</button>
                </div>
                <ul>
                    {products.map((item=>(<li
                    key={item.id}>{item.name} - {item.price}</li>
                    )))} 
                </ul>  
                <div className="gallery">              
                    <h2> Galeria </h2>
                
                <div className="gallery-container">
                {images.map((item=>(<img src={item.image} alt=""
                    key={item.id} />
                    )))} </div>
                </div>
            </div>
        </div>
    )

}

        
