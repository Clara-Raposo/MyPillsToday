import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import "./PillListPage.css"


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
        <h1>Mi medicación</h1>

        { error && <p>{error}</p>}
        
        <ul className='pill-list-ul'>
            {pills.map( pill => (
            
            <li key={pill.id}>
             
             <div className='list-item'> 
                <NavLink to={`pills/${pill.id}`}>{pill.name}</NavLink>
             </div>

            </li>
            ))}
        </ul>
       
        
    </div>

}

