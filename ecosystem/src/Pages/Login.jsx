import React from 'react';
import {
MDBBtn,
MDBContainer,
MDBRow,
MDBCol,
MDBCard,
MDBCardBody,
MDBInput,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';


function Login() {
    
    return ( 
        <>

        <MDBContainer fluid className='marg'>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'> 

                <MDBCard className='bg-dark text-white mt-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase"><img src="./src/imgs/Titulo.png" alt="" /></h2>
                <p className="text-white-50 mb-5">Por favor digite seu Login e Senha</p>

                <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email' id='formControlLg' type='email' placeholder='nome@hotmail.com' size="lg" onChange={(e) => setEmail(e.target.value)} required/>
                
                <MDBInput wrapperClass='mx-5 w-100' labelClass='text-white' label='Senha' id='senha' type='password' size="lg" onChange={(e) => setPassword(e.target.value)} required/>
                

                <p className="small mb-3 mt-0 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn outline className='mx-2 px-5 btn btn-primary link_login' color='white' size='lg'>
                <Link className="link_login" to={"/dashboard"}>Login</Link>
                </MDBBtn>
                
                <div className="mt-3">
                    <Link to={"/dashboard"}>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />
                    </Link>
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