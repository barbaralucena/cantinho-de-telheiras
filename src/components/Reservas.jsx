import "../style/Reservas.css";
import { useState } from "react";

export default function ReservasOnline() {
    const [formSubmitted, setFormSubmitted]=useState(false);
    const [formData, setFormData] = useState({name:"", date:"", time:"", peopleQuantity:"", phoneNumber:"", informations:""})

    function handleChange(event){
        const {name,value} = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        setFormSubmitted(true);
        console.log(formData);
    }
   
    return(
        <div className="form-page">
            {formSubmitted && <p role="alert"> {`Agradecemos a sua reserva ${formData.name}. Em breve receberá mensagem com a confirmação.`}</p>} {!formSubmitted && <form onSubmit={handleSubmit}>
                <div className="form">
                    <label className="first-label">
                    O seu nome:
                        <input 
                        type="text" 
                        name="name" 
                        aria-label="Name"
                        placeholder="O seu nome"
                        value={formData.name}
                        maxLength="30"
                        required  
                        onChange={handleChange}
                        />
                    </label>
                    <label>
                    Dia da Reserva:
                        <input 
                        type="date" 
                        name="date" 
                        aria-label="Date"
                        value={formData.date}
                        required  
                        onChange={handleChange}
                        />
                        <small> Sábado não servimos jantares. <br/> Domingo estamos encerrados.</small>
                    </label>
                    <label>
                        Hora:
                            <input 
                            type="time" 
                            name="time"
                            aria-label="Time"
                            min="12:00" 
                            max="21:30" 
                            value={formData.time}
                            required  
                            onChange={handleChange}
                            />
                            <small>Almoços: 12:00 - 15:00<br/>Jantares: 19:00 - 21:30</small>
                    </label>
                    <label>
                        Número de Pessoas:
                            <input 
                            type="number" 
                            name="peopleQuantity"
                            aria-label="People-quantity"
                            placeholder="Número de Pessoas"
                            value={formData.peopleQuantity}
                            required
                            minLength="1" maxLength="15"
                            onChange={handleChange}
                             />
                    </label>
                    <label>
                        O seu contacto:
                            <input 
                            type="number"
                            className="no-arrow"
                            name="phoneNumber"
                            aria-label="Phone-number"
                            placeholder="O seu número de telemóvel"
                            value={formData.phoneNumber}
                            minLength="9"
                            maxLength="12"
                            required
                            onChange={handleChange}
                            />
                    </label>
                    <label>
                        Informações adicionais:
                            <textarea
                            name="informations"
                            aria-label="Informations"
                            placeholder="Caso tenha mais alguma informação que nos queira transmitir, faço-o aqui por favor."
                            value={formData.informations}
                            onChange={handleChange}
                            />
                    </label>
                    <button type="submit" >Reservar mesa</button>
                </div>
            </form>}
       
    </div>
    )
}

