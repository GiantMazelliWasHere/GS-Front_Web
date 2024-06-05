import React, { useState,  } from 'react';
import {
MDBBtn,
MDBContainer,
MDBRow,
MDBCol,
MDBCard,
MDBCardBody,
MDBInput,
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { AiFillGoogleSquare } from "react-icons/ai";



function Login() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    
    const submitHandler = (e) => {
        const msgEmail = document.getElementById('msg-email');
        const msgSenha = document.getElementById('msg-senha');
        const limpezaEmail = msgEmail.innerHTML = '';
        const limpezaSenha = msgSenha.innerHTML = '';

        if (email === '') {
            limpezaEmail;
            limpezaSenha;
            msgEmail.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Email!</div>';
            return false;
        }
        if (senha === '') {
            limpezaEmail;
            limpezaSenha;
            msgSenha.innerHTML = '<div class="alert alert-danger" role="alert">Forneça sua Senha!</div>';
            return false;
        }
        limpezaEmail;
        limpezaSenha;
        return navigate('/dashboard');
    }

    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => console.log(tokenResponse),
    })
    
    return ( 
        <>

        <MDBContainer fluid className='marg'>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'> 

                <MDBCard className='bg-dark text-white mt-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase"><img src="./src/imgs/Titulo.png" alt="" /></h2>
                <p className="text-white-50 mb-5">Por favor digite seu Login e Senha</p>

                <MDBInput wrapperClass='mb-1 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' type='email' placeholder='nome@hotmail.com' size="lg" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <div id='msg-email'></div>
                <MDBInput wrapperClass=' mx-5 w-100' labelClass='text-white' label='Senha' id='senha' type='password' size="lg" placeholder='password' value={senha} onChange={(e) => setSenha(e.target.value)}  required/>
                <div id="msg-senha"></div>

                <p className=" small mb-3 mt-0 pb-lg-2"><Link to={'/esqueceusenha'}>Esqueceu a Senha?</Link></p>
                <MDBBtn outline className='mx-2 px-5 btn btn-primary link_login' id='btn' color='white' size='lg' onClick={submitHandler}>
                Login
                </MDBBtn>
                
                <div className="mt-3">
                    <MDBBtn outline className='mx-2 px-5 btn btn-primary link_login' color='white' size='lg' onClick={()=>login()}>
                    <Link className="link_login" to={"/dashboard"}><AiFillGoogleSquare className='google_icon'/></Link>
                    </MDBBtn>
                </div>

                    <div>
                     <p className="mb-0 mt-3">Não tem uma conta? <Link to={"/cadastro"}>Cadastre-se</Link></p>
                    </div>
                </MDBCardBody>
             </MDBCard>

            </MDBCol>
        </MDBRow>

    </MDBContainer>
        </>
     );
}

export default Login;