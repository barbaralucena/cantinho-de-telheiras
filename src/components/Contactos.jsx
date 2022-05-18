import "../style/Contactos.css"
export default function Contactos(){
    return(
        <div className="página-contactos">
            <header>
                <h1>Contactos e localização</h1>
            </header>
            <main>
                <div className="map">
                    <h2>Localização</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12444.74414002618!2d-9.1690209!3d38.7594369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x836de4916b63400e!2sCantinho%20de%20Telheiras!5e0!3m2!1spt-PT!2spt!4v1651518464628!5m2!1spt-PT!2spt" title="map" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
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