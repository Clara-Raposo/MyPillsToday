import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Configuration } from "./Configuration.jsx"

export const AlarmsChanged = () => {
    const [breakfastTime, setBreakfastTime] = useState("")
    const [lunchTime, setLunchTime] = useState("")
    const [dinerTime, setDinerTime] = useState("")
    /*const {breakfastTime} = useParams()
    const {lunchTime} = useParams()
    const {dinerTime} = useParams()

    useEffect(() =>{

    },[])*/
    const handleSubmit = (breakfastAlarm, lunchAlarm, dinerAlarm) =>{
        setBreakfastTime(breakfastTime)
        setLunchTime(lunchTime)
        setDinerTime(dinerTime)

    }

    return <div>
        <h2>Has cambiado la hora de tus alarmas</h2>
        <h3>Desayuno: {breakfastTime}</h3>
        <h3>Comida:{lunchTime}</h3>
        <h3>Cena: {dinerTime}</h3>

        <Configuration onSubmit={handleSubmit}/>
    </div>
}