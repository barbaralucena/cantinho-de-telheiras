import "../style/Footer.css";

export default function footer(){
    return(
        <footer> 
            <div className="social-media-container">
                <ul className="social-media">
                    <li><a href="https://www.facebook.com/OCantinhoDeTelheiras"><img className="fb" src="/images/ícones/fb.png" alt=""/></a></li>
                    <li><a href="https://www.instagram.com/ocantinhodetelheiras/"><img className="ig"src="/images/ícones/insta.png" alt=""/></a></li>
                    <li> <a href="mailto:cantinhotelheiras@gmail.com"><img className="mail" src="/images/ícones/mail.png" alt=""/></a></li>
                </ul>
            </div>
        </footer>
    );
}