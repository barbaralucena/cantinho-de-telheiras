import "../styles/Contactos.css"
export default function Contactos(){
    return(
        <div className="página-contactos">
            <header>
                <h1>Contactos e localização</h1>
            </header>
            <main>
                <div className="map">
                    <h2>Localização</h2>
                    <a href="https://www.google.com/maps/place/Cantinho+de+Telheiras,+R.+Prof.+Barbosa+Sueiro+14,+1600-598+Lisboa/@38.7594369,-9.1690209,15z/data=!4m2!3m1!1s0xd1932ddf4a90d07:0x836de4916b63400e"><img src="/images/contactos/img2.png" className="map-img" alt="link para localização do restaurante" /></a>
                    <p>R. Prof. Barbosa Sueiro 14, 1600-598 Lisboa</p>
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
                    <p>Encontramo-nos abertos de <span>segunda-feira a sexta-feira</span> das 8h às 22h e <span>sábados</span> das 8h às 16h. Aos <span>domingos</span> estamos encerrados.</p>
                </div>
            </main>
        </div>
    );
}