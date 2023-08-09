import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const PillDetailPage = () =>{
    const {pill_id} = useParams()
    const [pill, setPill] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()


    useEffect(() =>{
        getPill()
    },[pill_id])

    const getPill = () => {
        fetch(`http://localhost:5000/api/pills/${pill_id}`)
            .then((response) => response.json())
            .then((pill) => 
            setPill(pill[0]))
            .catch(error => {
                setError(error)
            })
    }

    const deletePill = (pill_id) => {
        fetch(`http://localhost:5000/api/pills/${pill_id}`, {
            method: "DELETE"
          })
        navigate(`/deleted-pill`)
    }

    return <div>
        {pill && <div>
        <h2>Nombre:{pill.name}</h2> 
        <p>Dosis:{pill.dosis}</p> 
        <p>Frecuencia:{pill.frecuency}</p> 
        <button type='button' onClick={() => deletePill(pill.id)}>ELIMINAR</button>

        </div>}
        <Link to="/medication">Volver a la Lista </Link>
        </div>
}

