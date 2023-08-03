import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PillDetailPage } from './PillDetailPage'

export const PillCreatedPage = () =>{

    return   <div> <h1>Has añadido una nueva pastilla a tu medicación</h1>{PillDetailPage}</div>

}