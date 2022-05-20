import {useEffect, useState} from "react";
import "../styles/Slideshow.css";

export default function Slideshow (){
    const slides = [
        "/images/slideshow/img1.jpeg",
        "/images/slideshow/img2.jpeg",
        "/images/slideshow/img3.jpeg",
        "/images/slideshow/img4.jpeg",
        "/images/slideshow/img5.jpeg",
    ]
    
    const [position, setPosition] = useState(0);
    const slideLength = slides.length;
    const autoSlide= true;
    let slideInterval;
    let intervalDuration = 2500;

    function prevSlide(){
        setPosition(prevState => prevState ===0? slideLength-1 : prevState-1); 
    }

    function nextSlide(){
        setPosition(prevState=> prevState===slideLength-1? 0: prevState+1); 
    }

    function autoPlay(){
        slideInterval = setInterval(nextSlide,intervalDuration)
    }

    useEffect(() => {
         setPosition(0)
    },[]);

    useEffect(() => {
        if (autoSlide) {
            autoPlay();
        }
        return () => clearInterval(slideInterval)
   }, []);
   
    return(
        <div className="slideshow">
            <img src={slides[position]} alt="" />
            <div className="slideshow_container">
                <button type="button" className="previous" onClick={prevSlide}>&#8249;</button>
                <button type="button" className="next" onClick={nextSlide}>&#8250;</button>
            </div>
        </div>
    )
    
}