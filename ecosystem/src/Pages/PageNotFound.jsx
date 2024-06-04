import { GiWaveSurfer } from "react-icons/gi";

function PageNotFound() {
    return ( 
        <>
            <div className="container_404 mt-5">
                <GiWaveSurfer className="icone_404"/>
                <p className="text_404">404 You Surfed to the Wrong Beach, brother</p>
            </div>
        </>
     );
}

export default PageNotFound;