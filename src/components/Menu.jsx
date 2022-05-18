import "../style/Menu.css";
import { useState, useEffect } from "react";
import {PratosdeCarne, PratosdePeixe, Petiscos, Sobremesas, Garrafeira} from "./menu-data";
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
        if(filter === 'GARRAFEIRA'){
            setProducts(Garrafeira)
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
                <button  onClick={()=> setFilter('PRATOS-DE-PEIXE')}>Pratos de Peixe</button>
                <button  onClick={()=> setFilter('PRATOS-DE-CARNE')}>Pratos de Carne</button>
                <button  onClick={()=> setFilter('PETISCOS')}>Petiscos</button>
                <button  onClick={()=> setFilter('SOBREMESAS')}>Sobremesas</button>
                <button  onClick={()=> setFilter('GARRAFEIRA')}>Garrafeira</button>
                </div>
                <ul>
                    {products.map((item=>(<li
                    key={item.id}>{item.name}</li>
                    )))} 
                </ul>
            </div>
        </div>
    )

}

        
