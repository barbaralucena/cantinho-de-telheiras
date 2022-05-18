import "../style/Footer.css";

export default function footer(){
    return(
        <footer className="site-footer"> 
            <div className="info">
                <span className="span-1"><a href="https://g.page/OCantinhoDeTelheiras?share">R. Prof. Barbosa Sueiro 14, 1600-598 Lisboa</a></span> | <span className="span-2"><a href="tel:217587843"> 217587843</a></span>
             </div>
            <div className="social-media">
                <p>Acompanhe-nos nas redes sociais:</p>
                <ul>
                    <li><a href="https://www.facebook.com/OCantinhoDeTelheiras"><img className="fb" src="/images/ícones/fb.svg" alt=""/></a></li>
                    <li><a href="https://www.instagram.com/ocantinhodetelheiras/"><img className="ig"src="/images/ícones/insta.svg" alt=""/></a></li>
                    <li> <a href="mailto:cantinhotelheiras@gmail.com"><img className="mail" src="/images/ícones/mail.svg" alt=""/></a></li>
                </ul>
            </div>
        </footer>
    );
}