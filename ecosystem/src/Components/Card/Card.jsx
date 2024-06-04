import { FaLinkedin } from "react-icons/fa";
import Integrantes from '../../../dados/integrantes.json';

export default function Card() {
    return (
        <>
            {Integrantes.map(integrante=>(
                <div className="informacoes">
                    <div className="Photo">
                        <img src={integrante.photo} alt={integrante.nome} className="img-integrantes" />
                    </div>
                    <div className="info">
                        <h3 className="nome">{integrante.nome}</h3>
                        <h4 className="cargo">{integrante.cargo}</h4>
                        <h2 className="empresa">Grupo EcoSystem</h2>
                        <a className="linkedin" href={integrante.linkedin}> <FaLinkedin/> </a>
                    </div>
                </div>
            ))}
        </>
    )
}