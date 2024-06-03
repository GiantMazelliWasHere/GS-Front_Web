import { MdBrokenImage } from "react-icons/md";

function PageNotFound() {
    return ( 
        <>
            <div className="container_404 mt-5">
                <MdBrokenImage className="icone_404"/>
                <p className="text_404">404 Page Not Found</p>
            </div>
        </>
     );
}

export default PageNotFound;