import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import { useState } from "react";

export const Configuration = () => {
    const [time, setTime] = useState("")
    const [breakfastAlarm, setBreakfastAlarm] = useState({
        hours:"",
        minutes: ""
    })
    const [lunchAlarm, setLunchAlarm] = useState({
        hours:"",
        minutes: ""
    })
    const [dinerAlarm, setDinerAlarm] = useState({
        hours:"",
        minutes: ""
    })

    const getTimeString = ({ hours, minutes }) => {
        //convierte el tiempo en un string
        if (minutes / 10 < 1){
            minutes = "0" + minutes;
        }
        return `${hours}:${minutes}`
    }

    const renderTime = () =>{
        const currentDate = new Date()
        let hours = currentDate.getHours()
        let minutes = currentDate.getMinutes()
        
        const timeString = getTimeString({ hours, minutes })
        setTime(timeString)
    }

    setInterval(renderTime, 1000)

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleChangeBreakfast = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setBreakfastAlarm((time)=> ({...time, [name]:value}))
    
    }

    const handleChangeLunch = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setLunchAlarm((time)=> ({...time, [name]:value}))
    
    }

    const handleChangeDiner = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setDinerAlarm((time)=> ({...time, [name]:value}))
    
    }


    return <div>
        <h2>Selecciona una hora para tus pastillas</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Desayuno
            <input type="number" name="hours" placeholder="Enter hours" min="0" max="24" required onChange={e => handleChangeBreakfast(e)}></input>
            <input type="number" name="minutes" placeholder="Enter minutes" min="0" max="60" required onChange={e => handleChangeBreakfast(e)}></input>
            </label>

            <label>Comida
            <input type="number" name="hours" placeholder="Enter hours" min="0" max="24" required onChange={e => handleChangeLunch(e)}></input>
            <input type="number" name="minutes" placeholder="Enter minutes" min="0" max="60" required onChange={e => handleChangeLunch(e)}></input>
            </label>

            <label>Cena
            <input type="number" name="hours" placeholder="Enter hours" min="0" max="24" required onChange={e => handleChangeDiner(e)}></input>
            <input type="number" name="minutes" placeholder="Enter minutes" min="0" max="60" required onChange={e => handleChangeDiner(e)}></input>
            </label>

            <button type="submit">Guardar hora</button>
        </form>
 
        <div>
            <h3>El tiempo ahora</h3>
            <div id="current-time">
                {time}
            </div>
        </div>
    </div>
}