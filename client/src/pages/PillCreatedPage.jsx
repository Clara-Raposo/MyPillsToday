import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PillDetailPage } from './PillDetailPage.jsx'

export const PillCreatedPage = () =>{
    const {pill_id} = useParams()
    console.log(pill_id)
    useEffect(() =>{

    },[pill_id])

    return   <div> <h1>Has añadido una nueva pastilla a tu medicación</h1>
    <PillDetailPage/>
    
    </div>

}