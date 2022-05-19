import "../styles/Garrafeira.css";
import { useState, useEffect } from "react";
import {VinhosBrancos, VinhosRosés, VinhosTintos, VinhosVerdes} from "../data/garrafeira-data";

export default function Garrafeira(){
    const [filter,setFilter] = useState('VINHOS-TINTOS')
    const [products, setProducts] = useState(VinhosTintos)
    useEffect(()=>{
        if(filter === 'VINHOS-TINTOS'){
            setProducts(VinhosTintos)
        }
        if(filter === 'VINHOS-BRANCOS'){
            setProducts(VinhosBrancos)
        }
        if(filter === 'VINHOS-VERDES'){
            setProducts(VinhosVerdes)
        }
        if(filter === 'VINHOS-ROSÉS'){
            setProducts(VinhosRosés)
        }
    },[filter])
    return(
        <div className="garrafeira">
            <header>
                <h1>Os nossos vinhos</h1> 
            </header>
            <div className="garrafeira-nav">
                <div className="btn-container">
                <button  onClick={()=> setFilter('VINHOS-TINTOS')}>Vinhos Tintos</button>
                <button  onClick={()=> setFilter('VINHOS-BRANCOS')}>Vinhos Brancos</button> <button  onClick={()=> setFilter('VINHOS-VERDES')}>Vinhos Verdes</button> <button  onClick={()=> setFilter('VINHOS-ROSÉS')}>Vinhos Rosés</button>
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

        
