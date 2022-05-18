import "../style/Contactos.css"
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
                </div>
                <div className="horários">
                    <h2>Horários</h2>
                    <p>De <span>segunda-feira a sexta-feira</span> das 8 às 22h.</p>
                    <p><span>Sábados</span> das 8h às 16h.</p>
                </div>
            </main>
        </div>
    );
}