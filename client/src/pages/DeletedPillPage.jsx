import React from "react";
import {Link} from "react-router-dom"
import "./DeletedPillPage.css"

export const DeletedPillPage = () => {
    return <div className="deleted-pill">
        <h1>La pastilla ha sido borrada</h1>

        <div className="deleted-pill__link"><Link to="/medication">Volver a la Lista </Link></div>
    </div>
}