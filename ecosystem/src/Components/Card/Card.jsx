import { FaLinkedin } from "react-icons/fa";
import Integrantes from '../../../dados/integrantes.json';
import { IconContext } from "react-icons";

export default function Card() {
    return (
        <>
            {Integrantes.map(integrante=>(
                <div className="integrante">
                    <div className="photo">
                        <img src={integrante.photo} alt={integrante.nome} />
                    </div>
                    <div className="info">
                        <h3 className="nome">{integrante.nome}</h3>
                        <h4 className="cargo">{integrante.cargo}</h4>
                        <h2 className="empresa">Grupo EcoSystem</h2>
                        <IconContext.Provider value={{size:"3em", color: "black"}}>
                            <a className="icon" href={integrante.linkedin}> <FaLinkedin/> </a>
                        </IconContext.Provider>
                    </div>
                </div>
            ))}
        </>
    )
}