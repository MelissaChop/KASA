import "../styles/Error404.css"
import React from "react";
import { Link } from "react-router-dom";

function Error404(){
    return <div className="pageError">
      
        <p className="Err404">404</p>
        <p className="textError">Oups! La page que vous demandez n'existe pas!</p>
       <Link to="/" className="lien">Retourner sur la page d'accueil</Link>
        
    </div>
}
export default Error404