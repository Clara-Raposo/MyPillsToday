import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

export const PillDetailPage = () =>{
    const {pill_id} = useParams()
    const [pill, setPill] = useState("null")
    const [error, setError] = useState("")


    useEffect(() =>{
        getPill()
    },[pill_id])

    const getPill = () => {
        fetch(`/api/pills/${pill_id}`)
            .then((response) => response.json())
            .then((pill) => 
            setPill(pill))
            .catch(error => {
                setError(error)
            })
    }

    const deletePill = (pill_id) => {
        fetch(`api/pills/${pill_id}`, {
            method: "DELETE"
          })
        navigate(`/deleted-pill`)
    }

    return <div>{pill && <div>
        <h2>{pill.name}</h2> 
        <p>{pill.dosis}</p> 
        <p>{pill.frecuency}</p> 
        <button type='button' onClick={() => deletePill(pill.id)}>ELIMINAR</button>

        </div>}
        <Link to="/medication">Volver a la Lista </Link>
        </div>
}
//