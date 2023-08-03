import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export const PillsListPage = () =>{
    const [pills, setPills] = useState([])
    const [error, setError] = useState("")

    useEffect(() =>{
        getPills()
        console.log(pills)
    },[])

    const getPills = () =>{
        fetch('api/pills')
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
        <h1>My medication</h1>

        { /*error && <p>{error}</p>*/}
        
        <ul>
            {pills.map( pill => (
            <li key={pill.id}>
               {pill.name}

            </li>))}
        </ul>
        
    </div>

}

// <Link to={`pills/${pill.id}`}>{pill.name}</Link>