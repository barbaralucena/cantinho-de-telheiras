import {useState} from "react";
import "../style/Slideshow.css";

export default function Slideshow (){
    const slides= [
        "/images/slideshow/img1.jpeg",
        "/images/slideshow/img2.jpeg",
        "/images/slideshow/img3.jpeg",
        "/images/slideshow/img4.jpeg",
    ]
    const [position,setPosition]=useState(0);

    function prevImage(){
        setPosition(prevState=> prevState===0? slides.length-1: prevState-1);
    }
    function nextImage(){
        setPosition(prevState=> prevState===slides.length-1? 0: prevState+1);    
    }
   
    return(
        <div className="slideshow">
            <img src={slides[position]} alt="" />
            <div className="slideshow_container">
                <button type="button" onClick={prevImage}>&lt;</button>
                <button type="button" onClick={nextImage}>&gt;</button>
            </div>
        </div>
    )
    
}