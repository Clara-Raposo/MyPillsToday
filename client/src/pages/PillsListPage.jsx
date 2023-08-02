import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export const PillsListPage = () =>{
    const [pills, setPills] = useState([])
    const [error, setError] = useState("")

    useEffect(() =>{
        getPills()
        console.log(getPills())
    },[])

    const getPills = () =>{
        fetch('/pills')
        .then(response => response.json())
        .then(pills => {
            setPills(pills)
        })
        .catch(error => {
            setError(error)
        })
    }

    return <div>
        <h1>My medication</h1>
        
        <ul>
            {pills.map( pill => (
            <li key={pill.id}>
                {pill.name}
                {pill.dosis}
                {pill.frecuency}

            </li>))}
        </ul>
        
    </div>

}