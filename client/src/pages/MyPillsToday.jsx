import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const MyPillsToday = () =>{

    const [pills, setPills] = useState([])
    const [error, setError] = useState("")

    useEffect(() =>{
        getPills()
        console.log(pills)
    },[])

    const dateToday = new Date().toISOString().slice(0,10);

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
        
       
        <h1>Mis pastillas hoy</h1>
        <div>
            <h2>Desayuno</h2>

            <ul>
                {pills.filter( pill => ( pill.breakfast == 1)).filter( pill => (dateToday-pill.fecha)%pill.frecuency === 0).map( pill => (
                <li key={pill.id}>
                
                <p>{pill.name} Dosis:{pill.dosis}</p>

                </li>))}
            </ul>

        </div>
        <div>
            <h2>Comida</h2>
            <ul>
                {pills.filter( pill => ( pill.lunch == 1)).map( pill => (
                <li key={pill.id}>
                
                <p>{pill.name} Dosis:{pill.dosis}</p>

                </li>))}
            </ul>
        </div>
        <div>
            <h2>Cena</h2>
            <ul>
                {pills.filter( pill => ( pill.dinner == 1)).map( pill => (
                <li key={pill.id}>
                
                <p>{pill.name} Dosis:{pill.dosis}</p>

                </li>))}
            </ul>
        </div>
    </div>
}