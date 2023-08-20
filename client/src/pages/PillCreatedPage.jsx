import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PillDetailPage } from './PillDetailPage.jsx'
import "./PillCreatedPage.css"

export const PillCreatedPage = () =>{
    const {pill_id} = useParams()
    useEffect(() =>{

    },[pill_id])

    return   <div className='container'> <div className='container__p'><p>¡Has añadido una nueva pastilla a tu medicación!</p></div>
    <PillDetailPage/>
    
    </div>

}