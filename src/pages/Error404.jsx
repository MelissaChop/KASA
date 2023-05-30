import "../styles/Error404.scss"

function Error404(){
    return <div className="pageError">
      
        <p className="Err404">404</p>
        <p className="textError">Oups! La page que vous demandez n'existe pas!</p>
       <a href = "#" className="lien">Retourner sur la page d'accueil</a>
        
    </div>
}
export default Error404