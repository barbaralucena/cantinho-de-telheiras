import "../style/Contactos.css"
export default function Contactos(){
    return(
        <div className="página-contactos">
            <div className="map">
                <h1>A nossa Localização:</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12444.74414002618!2d-9.1690209!3d38.7594369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x836de4916b63400e!2sCantinho%20de%20Telheiras!5e0!3m2!1spt-PT!2spt!4v1651518464628!5m2!1spt-PT!2spt" width="600" height="450"  allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contactos">
                <h1>Os nosso contactos:</h1>
                    <p>
                        Telefone: 
                        <a href="tel:217587843"> 
                        217587843</a>
                    </p>
                    <p>
                        Email:  
                        <a href="mailto:cantinhotelheiras@gmail.com">   cantinhotelheiras@gmail.com</a>
                    </p>
            </div>
            <div className="horários">
                <h1>O nosso horário:</h1>
                <p>De segunda-feira a sexta-feira, das 8 às 22h</p>
                <p>E sábados das 8h às 16h</p>
            </div>
        </div>
    );
}