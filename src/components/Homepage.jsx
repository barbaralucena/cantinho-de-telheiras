
export default function Homepage(){
    return(
        <main className="homepage-gallery">
           <img src={process.env.PUBLIC_URL + "/images/slideshow/img1.jpeg"} alt="" />
           <img src={process.env.PUBLIC_URL + "/images/slideshow/img2.jpeg"} alt="" />
           <img src={process.env.PUBLIC_URL + "/images/slideshow/img3.jpeg"} alt="" />
           <img src={process.env.PUBLIC_URL + "/images/slideshow/img4.jpeg"} alt=""/>
           <img src={process.env.PUBLIC_URL + "/images/slideshow/img5.jpeg"} alt=""/>
        </main>
    )
}

