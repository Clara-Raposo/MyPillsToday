import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddPillPage = () =>{
    const [pill, setPill] = useState({
        name: "",
        dosis: "null",
        frecuency: "null",
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
        await fetch("api/pills", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(pill)
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
            <select name="dosis" onChange={e => handleChange(e)}>
                <option value="null">Seleccione una opción</option>
                <option value="0.5">0.5</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                </select>
            </label>
            <label>Frecuencia
            <select name="frecuency" onChange={e => handleChange(e)}>
                <option value="null">Seleccione una opción</option>
                <option value="daily">Diaria</option>
                <option value="weekly">Semanal</option>
                <option value="monthly">Mensual</option>
                
            </select>
            </label>
            <button type="submit">Añadir</button>
        </form>

        {error && <p>{error}</p>}


    </div>
}