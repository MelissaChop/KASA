import "../styles/Error404.css"
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer";

function Error404(){
    return <div className="pageError">
      <Header/>
        <p className="Err404">404</p>
        <p className="textError">Oups! La page que vous demandez n'existe pas!</p>
       <Link to="/" className="lien">Retourner sur la page d'accueil</Link>
        <Footer/>
    </div>
}
export default Error404