import "../styles/Footer.css";

export default function footer(){
    return(
        <footer> 
            <div className="info">
                <span className="span-1"><a href="https://g.page/OCantinhoDeTelheiras?share">R. Prof. Barbosa Sueiro 14, 1600-598 Lisboa</a></span> | <span className="span-2"><a href="tel:217587843"> 217587843</a></span>
             </div>
            <div className="social-media">
                <ul>
                    <li>Acompanhe-nos nas redes sociais:</li>
                    <li><a href="https://www.facebook.com/OCantinhoDeTelheiras"><img className="fb" src="/images/ícones/fb.svg" alt="Link para página de Facebook do restaurante"/></a></li>
                    <li><a href="https://www.instagram.com/ocantinhodetelheiras/"><img className="ig"src="/images/ícones/insta.svg" alt="Link para página de Instagram do restaurante"/></a></li>
                    <li> <a href="mailto:cantinhotelheiras@gmail.com"><img className="mail" src="/images/ícones/mail.svg" alt="Link para enviar email para o email do restaurante"/></a></li>
                </ul>
            </div>
        </footer>
    );
}