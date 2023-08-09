import React from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"

export const AlarmsChanged = () => {
    const {breakfastTime} = useParams()
    const {lunchTime} = useParams()
    const {dinerTime} = useParams()

    useEffect(() =>{

    },[breakfastTime, lunchTime, dinerTime])

    return <div>
        <h2>Has cambiado la hora de tus alarmas</h2>
        <h3>Desayuno: {breakfastTime}</h3>
        <h3>Comida:{lunchTime}</h3>
        <h3>Cena: {dinerTime}</h3>
    </div>
}