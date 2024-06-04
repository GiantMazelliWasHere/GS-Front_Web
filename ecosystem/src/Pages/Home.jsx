import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBBtn } from 'mdb-react-ui-kit';
import Mar1 from '../imgs/mar-carrossel-1.jpg';
import Mar2 from '../imgs/mar-carrossel-2.jpg';
import Mar3 from '../imgs/mar-carrossel-3.jpg';
import{ Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className='carrossel'>
                <MDBCarousel showControls>
                    <MDBCarouselItem itemId={1}>
                        <img src={Mar1} className='d-block w-100' alt='praia vista de cima' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={2}>
                        <img src={Mar2} className='d-block w-100' alt='mar visto de cima' />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId={3}>
                        <img src={Mar3} className='d-block w-100' alt='vista do horizonte em uma praia' />
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>
            <div className="home_info">
                <p>Aqui na EcoSystem prezamos pela conscientização e preservação do meio-ambiente.
Por isso, usando sensores de pH e temperatura espalhados pelos oceanos, desenvolvemos este site para que todos possam aprender mais sobre como anda a saúde dos nossos Oceanos e como isso impacta a vida marinha e humana!
</p>
            </div>
            <div className="cta">
                <h2 className='cta_info'>Descubra a Saúde do Mar Você Também:</h2>
                <MDBBtn color='primary' className='btn-cta'>
                    <Link to={'/cadastro'} className='link-cta'>Cadastre-se</Link>
                </MDBBtn>


            </div>
        </>
     );
}

export default Home;