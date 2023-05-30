import "../styles/Error404.scss"
//import Footer from "../components/Footer"
//import Header from "../components/Header"

function Error404(){
    return <div>
        {/*<Header/>*/}
        <p className="Err404">404</p>
        <p>Oups! La page que vous demandez n'existe pas!</p>
      {/*}  <a href = {"#"}>Retourner sur la page d'acceuil</a>*/}
        {/*<Footer/>*/}
    </div>
}
export default Error404