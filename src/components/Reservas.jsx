
export default function ReservasOnline() {
    return(
        <main>
            <form>
                <div>
                    <label>
                    O seu nome:
                    <input type="text" name="nome" required  
                    />
                    </label>
                </div>
                <div>
                    <label>
                    Dia da Reserva:
                    <input type="date" name="data" required 
                    />
                    </label>
                </div>
                <div>
                <label>
                    Hora:
                    <input type="time" name="hora" required  
                    />
                    </label>
                </div>
                <div>
                    <label>
                        Número de Pessoas:
                        <input type="number" name="pessoas"/>
                    </label>
                </div>
                <div>
                    <button type="submit">Guardar</button>
                </div>
            </form>
        </main>
  )
    }