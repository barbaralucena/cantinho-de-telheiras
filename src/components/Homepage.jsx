import "../style/Homepage.css"
import Slideshow from "./Slideshow";
import HeaderInfo from "./HeaderInfo";
export default function Homepage(){
    return( 
           <div> 
               <div className="header-info">
                   <HeaderInfo/>
               </div>
            <main>
             <Slideshow/>
            </main>
            </div>
    )
}

