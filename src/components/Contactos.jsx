import "../styles/Contactos.css"
import Map from "../data/map";
export default function Contactos(){
    return(
        <div className="página-contactos">
            <header>
                <h1>Contactos e localização</h1>
            </header>
            <main>
                <div className="map">
                    <h2>Localização</h2>
                    <Map/>
                </div>
                <div className="contactos">
                    <h2>Contactos</h2>
                    <p>
                        <span>Telefone:</span> <a href="tel:217587843"> 217587843</a>
                    </p>
                    <p>
                        <span>Email:</span>
                        <a href="mailto:cantinhotelheiras@gmail.com">   cantinhotelheiras@gmail.com</a>
                    </p>
                    <p>
                        <span>Instagram:</span>
                        <a href="https://www.instagram.com/ocantinhodetelheiras/">   @ocantinhodetelheiras</a>
                    </p>
                    <p>
                        <span>Facebook:</span>
                        <a href="https://www.facebook.com/OCantinhoDeTelheiras/">   @OCantinhodDeTelheiras</a>
                    </p>
                   
                </div>
                <div className="horários">
                    <h2>Horários</h2>
                    <p>Encontramo-nos abertos de <span>segunda-feira a sexta-feira</span> das 8 às 22h e <span>sábados</span> das 8h às 16h. Aos <span>domingos</span> encerramos.</p>
                </div>
            </main>
        </div>
    );
}