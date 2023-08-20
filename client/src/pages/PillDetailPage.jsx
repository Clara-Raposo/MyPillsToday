import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./PillDetailPage.css"

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

    const getDate = pill =>{
        const date = new Date(pill.fecha)
        return date.toISOString().slice(0,10);
    }

    return <div>
        {pill && <div className='pill-detail'>
           
            <h1>{pill.name}</h1> 

            <div className='pill-detail-container'>
            
                <div className='pill-detail-container__dosis'><p>Dosis</p></div><div className='pill-detail-container__dosis-total'> <p>{pill.dosis} PASTILLAS</p></div>
                <div className='pill-detail-container__frecuencia'><p>Frecuencia</p></div><div className='pill-detail-container__frecuencia-dias'><p>{pill.frecuency} DÍAS</p> </div>
            
                <div className='pill-detail-container__breakfast'><p>A Tomar en el desayuno</p></div><div className='pill-detail-container__breakfast-option'>{pill.breakfast == 0 ? <p>No</p> : <p> Si</p> }</div>
                <div className='pill-detail-container__lunch'><p>A Tomar en la comida</p></div><div className='pill-detail-container__lunch-option'> {pill.lunch == 0 ? <p>No</p> : <p> Si</p> } </div>
                <div className='pill-detail-container__dinner'><p>A Tomar en la cena</p> </div><div className='pill-detail-container__dinner-option'>{pill.dinner == 0 ? <p>No</p> : <p> Si</p> }</div>
                <div className='pill-detail-container__medicacion'><p>Fecha de inicio de la medicación</p></div><div className='pill-detail-container__medication-date'>{getDate(pill)}</div>

            </div>
            <div className="pill-detail-container__button">
                <button className="pill-detail-container__delete" type='button' onClick={() => deletePill(pill.id)}>ELIMINAR PASTILLA</button>
            </div>
        </div>}
        <div className='pill-detail__link'><Link to="/medication">Volver a la Lista </Link></div>
        </div>
}

//.toISOString().slice(0,10)
