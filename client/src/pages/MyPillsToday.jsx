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

                <div className="div-container__ul">
                    <ul>
                        {pills.filter( pill => ( pill.breakfast == 1)).filter(pill => countDays(pill) === 0).map( pill => (
                        <div className="div-container__li">
                            <li key={pill.id}>
                            
                            <div className="div-container__li-pill"><div className="div-container__li-pill__h4"><h4>{pill.name}</h4></div> <div className="div-container__li-pill__p"><p>- Dosis: {pill.dosis}</p></div></div>

                            </li>
                        </div>))}
                    </ul>
                </div>

            </div>
            <div className="div-container">
                <h2 className="div-container__h2">Comida</h2>
                <div className="div-container__ul">
                    <ul>
                        {pills.filter( pill => ( pill.lunch == 1)).filter(pill => countDays(pill) === 0).map( pill => (
                        <div className="div-container__li">
                        <li key={pill.id} >
                        
                        <div className="div-container__li-pill"><div className="div-container__li-pill__h4"><h4>{pill.name}</h4></div> <div className="div-container__li-pill__p"><p>- Dosis: {pill.dosis}</p></div></div>

                        </li>
                        </div>))}
                    </ul>
                </div>
            </div>

            <div className="div-container">
                <h2 className="div-container__h2">Cena</h2>
                <div className="div-container__ul">
                    <ul>
                        {pills.filter( pill => ( pill.dinner == 1)).filter(pill => countDays(pill) === 0).map( pill => (
                        <div className="div-container__li">
                        <li key={pill.id}>
                        
                        <div className="div-container__li-pill"><div className="div-container__li-pill__h4"><h4>{pill.name}</h4></div> <div className="div-container__li-pill__p"><p>- Dosis: {pill.dosis}</p></div></div>


                        </li>
                    </div>))}
                    </ul>
                </div>
            </div>
       
    </div>
}
