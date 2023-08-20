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

            <div className='form_nombre'>
                  <div className='form_nombre__label'><label htmlFor='name'>Nombre: </label></div>
                <div className='form_nombre__input'><input className='form_nombre_input' type="text" value={pill.name} id="name" required name = "name" onChange={e => handleChange(e)}></input></div>
               
            </div>

        
                <div className='form_dosis'>
                    <label htmlFor='dosis'>Dosis:</label>
                        <select className='form_dosis_input' name="dosis" id="dosis" required placeholder='Seleccione una opcion' onChange={e => handleChange(e)}>
                            <option value="null">Seleccione una dosis</option>
                            <option value="0.5">0.5</option>
                            <option value="1">1</option>
                            <option value="1.5">1.5</option>
                            <option value="2">2</option>
                            </select><span>PASTILLAS</span>
                </div>

                <div className='form_frecuencia'>
                    <label htmlFor='frecuencia'>Frecuencia:</label>
                        <input className='form_frecuencia_input' type = "number" name="frecuency" id="frecuencia" required value={pill.frecuency} onChange={e => handleChange(e)}></input><span>DÍAS</span>
                    
                </div>
        

            <div className='form_diario'>
                <legend className='form_diario_legend'>Elige cuando tomarla:</legend>
                <div className='form_diario__options'>
                    <input type="checkbox" id="breakfast" name="breakfast" checked={pill.breakfast} onChange={(e)=>handleCheckbox(e)}></input>
                    <label for="breakfast"> Desayuno</label>
                    <input type="checkbox" id="lunch" name="lunch" checked={pill.lunch} onChange={(e) => handleCheckbox(e)}></input>
                    <label for="lunch"> Comida</label>
                    <input type="checkbox" id="dinner" name="dinner" checked={pill.dinner} onChange={(e) => handleCheckbox(e)}></input>
                    <label for="dinner"> Cena</label>
                </div>
            </div>
            
            <button className="form_submit" type="submit">Añadir</button>
        </form>

        {error && <p>{error}</p>}


    </div>
}