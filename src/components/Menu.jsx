import "../styles/Menu.css";
import { useState, useEffect } from "react";
import {PratosdeCarne, PratosdePeixe, Petiscos, Sobremesas} from "../data/menu-data";

export default function Menu(){
    const [filter,setFilter] = useState('PRATOS-DE-CARNE')
    const [products, setProducts] = useState(PratosdeCarne)
    useEffect(()=>{
        if(filter === 'PRATOS-DE-CARNE'){
            setProducts(PratosdeCarne)
        }
        if(filter === 'PRATOS-DE-PEIXE'){
            setProducts(PratosdePeixe)
        }
        if(filter === 'PETISCOS'){
            setProducts(Petiscos)
        }
        if(filter === 'SOBREMESAS'){
            setProducts(Sobremesas)
        }
    },[filter])
    return(
        <div className="menu">
            <header>
                <h1>O nosso menu</h1> 
                <p>(A oferta de pratos varia diariamente)</p>
            </header>
            <div className="menu-nav">
                <div className="btn-container">
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
            </div>
        </div>
    )

}

        
