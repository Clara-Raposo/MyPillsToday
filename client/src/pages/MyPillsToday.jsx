import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./MyPillsToday.css"

export const MyPillsToday = () =>{

    const [pills, setPills] = useState([])
    const [error, setError] = useState("")

    useEffect(() =>{
        getPills()
    },[])

    const countDays = (pill) => {
        const dateToday = new Date().toISOString().slice(0,10);
        const simpleDate = new Date(dateToday)
        const pillDate = new Date(pill.fecha)
        
        const result = (simpleDate-pillDate)/(1000*60*60*24)
        
       return  Math.round(result%pill.frecuency)
    }

    const getPills = () =>{
        fetch('api/pills/frecuency')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(pills => {
           setPills(pills)
        })
        .catch(error => {
            setError(error)
        })
    }

    return <div>

        { error && <p>{error}</p>}
        
       
        <h1>Mis pastillas de hoy</h1>
        <div className="div-container">
            <h2 className="div-container__h2">Desayuno</h2>

            <ul>
                {pills.filter( pill => ( pill.breakfast == 1)).filter(pill => countDays(pill) === 0).map( pill => (
                <li key={pill.id}>
                
                <p>{pill.name} Dosis:{pill.dosis}</p>

                </li>))}
            </ul>

        </div>
        <div className="div-container">
            <h2 className="div-container__h2">Comida</h2>
            <ul>
                {pills.filter( pill => ( pill.lunch == 1)).filter(pill => countDays(pill) === 0).map( pill => (
                <li key={pill.id}>
                
                <p>{pill.name} Dosis:{pill.dosis}</p>

                </li>))}
            </ul>
        </div>
        <div className="div-container">
            <h2 className="div-container__h2">Cena</h2>
            <ul>
                {pills.filter( pill => ( pill.dinner == 1)).filter(pill => countDays(pill) === 0).map( pill => (
                <li key={pill.id}>
                
                <p>{pill.name} Dosis:{pill.dosis}</p>

                </li>))}
            </ul>
        </div>
    </div>
}

//.filter( pill => (dateToday-pill.fecha)%pill.frecuency === 0)