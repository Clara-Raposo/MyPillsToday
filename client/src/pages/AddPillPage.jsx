import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AddPillPage.css"

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

    const date = new Date().toISOString().slice(0,10);

    const handleChange = event =>{
        const name = event.target.name
        const value = event.target.value

        setPill( (pill) =>({...pill,[name]:[value]}))
    }

    const handleCheckbox = event =>{
        const name = event.target.name
        const checked = event.target.checked
        setPill((pill) =>({...pill,[name]:[checked]}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        addPill(pill)   
    }

    const addPill = (pill) => {
        const date = new Date().toISOString().slice(0,10);
        fetch("api/pills", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({...pill, date})
        }).then(res => res.json())
        .then(pillId => {
         
            navigate(`/new-pill-created/${pillId.lastId}`)})
        .catch(error => {
            setError(error)
        })
    }
  

    return <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h1>Añade una pastilla</h1>

            {date}

            <div className='form_nombre'>
                <label >Nombre:
                    <input className='form_nombre_input' type="text" value={pill.name} name = "name" onChange={e => handleChange(e)}></input>
                </label>
            </div>

            <div className='form_dosis_frecuencia'>
                <div className='form_dosis'>
                    <label>Dosis:
                        <select className='form_dosis_input' name="dosis" required placeholder='Seleccione una opcion' onChange={e => handleChange(e)}>
                            <option value="null">Seleccione una dosis</option>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            </select>
                    </label>
                </div>

                <div className='form_frecuencia'>
                    <label>Frecuencia:
                        <input className='form_frecuencia_input' type = "number" name="frecuency" value={pill.frecuency} onChange={e => handleChange(e)}></input>
                    </label>
                </div>
            </div>

            <div className='form_diario'>
                <legend className='form_diario_legend'>Elige cuando tomarla:</legend>
                <input type="checkbox" id="breakfast" name="breakfast" checked={pill.breakfast} onChange={(e)=>handleCheckbox(e)}></input>
                <label for="breakfast"> Desayuno</label>
                <input type="checkbox" id="lunch" name="lunch" checked={pill.lunch} onChange={(e) => handleCheckbox(e)}></input>
                <label for="lunch"> Comida</label>
                <input type="checkbox" id="dinner" name="dinner" checked={pill.dinner} onChange={(e) => handleCheckbox(e)}></input>
                <label for="dinner"> Cena</label>
            </div>
            
            <button className="form_submit" type="submit">Añadir</button>
        </form>

        {error && <p>{error}</p>}


    </div>
}