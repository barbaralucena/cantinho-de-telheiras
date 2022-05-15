import {useEffect, useState} from "react";
import "../style/Slideshow.css";

export default function Slideshow (){
    const slides= [
        "/images/slideshow/img1.jpeg",
        "/images/slideshow/img2.jpeg",
        "/images/slideshow/img3.jpeg",
        "/images/slideshow/img4.jpeg",
        "/images/slideshow/img5.jpeg",
    ]
    
    const [position,setPosition]=useState(0);

    function prevImage(event){
        setPosition(prevState=> prevState===0? slides.length-1: prevState-1);
        event.preventDefault(event);
    }

    function nextImage(event){
        setPosition(prevState=> prevState===slides.length-1? 0: prevState+1);
        event.preventDefault(event); 
    }

    useEffect(() => {
        setInterval(nextImage, 3000);
    });
   
    return(
        <div className="slideshow">
            <img src={slides[position]} alt="" />
            <div className="slideshow_container">
                <button type="button" className="previous" onClick={prevImage}>&#8249;</button>
                <button type="button" className="next" onClick={nextImage}>&#8250;</button>
            </div>
        </div>
    )
    
}