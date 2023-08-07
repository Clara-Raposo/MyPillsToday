import React from "react";
import {Link} from "react-router-dom"

export const DeletedPillPage = () => {
    return <div>
        <h1>La pastilla ha sido borrada</h1>

        <Link to="/medication">Volver a la Lista </Link>
    </div>
}