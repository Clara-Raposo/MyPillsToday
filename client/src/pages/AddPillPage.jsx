import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddPillPage = () =>{
    const [pill, setPill] = useState({
        name: "",
        dosis: "null",
        frecuency: "",
        breakfast: false,
        lunch: false,
        dinner: false, 
    })
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleChange = event =>{
        const name = event.target.name
        const value = event.target.value

        setPill( (pill) =>({...pill,[name]:[value]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        addPill(pill)
       navigate(`/new-pill-created/${pill.id}`)
    }

    const addPill = async(pill) => {
        const date = new Date().toISOString().slice(0,10);
        await fetch("api/pills", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({...pill,date})
        })
        .catch(error => {
            setError(error)
        })
    }
  

    return <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label>Nombre
                <input type="text" value={pill.name} name = "name" onChange={e => handleChange(e)}></input>
            </label>
            <label>Dosis
            <select name="dosis" required placeholder='Seleccione una opcion' onChange={e => handleChange(e)}>
                <option value="0.5">0.5</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                </select>
            </label>
            <label>Frecuencia
            <input type = "number" name="frecuency"></input>
            </label>
            <input type="checkbox" id="breakfasr" name="breakfast" value="false"></input>
            <label for="breakfas"> Desayuno</label>
            <input type="checkbox" id="lunch" name="lunch" value="false"></input>
            <label for="lunch"> Comida</label>
            <input type="checkbox" id="diner" name="diner" value="diner"></input>
            <label for="diner"> Cena</label><br></br>
            <button type="submit">Añadir</button>
        </form>

        {error && <p>{error}</p>}


    </div>
}