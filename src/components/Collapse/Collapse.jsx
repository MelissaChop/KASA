import style from "./Collapse.module.css"
import flecheBas from "../../assets/Bas.png"
import { useState } from "react"

export default function Collapse({about}){


const [aboutState, setAboutState] = useState(false);
    const toggleState = () => {
        setAboutState(!aboutState)
        console.log(aboutState)
    }

return (
    <div className={style.Container}>
        <div className={style.Titre} onClick={toggleState}>
            <p>
                {about.title}
            </p>
            <img src={flecheBas} alt="flecheBas" />
        </div>
        <div>{about.content}</div>
    </div>

)
}