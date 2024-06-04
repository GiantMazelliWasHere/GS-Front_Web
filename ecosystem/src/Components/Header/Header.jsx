import {Link} from 'react-router-dom';

function Header(){

    return (
        <>
        <header>
            <div>
                <Link to={'/'}><img src="./src/imgs/Titulo.png" alt="" /></Link>
            </div>
            <div className="navegar">
                <div className="home"><Link to={'/'}><a href="">Home</a></Link></div>
                <div className="sobrenos"><Link to={'sobrenos'}><a href="">Sobre Nós</a></Link></div>
                <div className="login btn btn-primary"><Link to={'login'}><a href="">Login</a></Link></div>
            </div>
        </header>
    </>
    )
}
    

export default Header;