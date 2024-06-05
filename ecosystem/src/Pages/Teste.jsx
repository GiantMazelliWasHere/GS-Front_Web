import React, { useState } from 'react';
import {
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody 
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { AiFillGoogleSquare } from "react-icons/ai";

export default function Test() {
  const [formValue, setFormValue] = useState({
    email: '',
    senha: '',
  });

  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value });
  };

  return (
    <MDBContainer fluid className='marg'>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>
                <MDBCard className='bg-dark text-white mt-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'> 
                        <MDBValidation>
                        <MDBValidationItem feedback='Forneça seu Email!' required>
                                <MDBInput
                                value={formValue.email}
                                name='email'
                                onChange={onChange}
                                id='validationCustom05'
                                required
                                label='Email'
                                type='email'
                                />
                            </MDBValidationItem>
                            <MDBValidationItem feedback='Forneça sua Senha!' invalid>
                                <MDBInput
                                value={formValue.senha}
                                name='senha'
                                onChange={onChange}
                                id='validationCustom05'
                                required
                                label='Senha'
                                type='password'
                                />
                            </MDBValidationItem>
                            <p className=" small mb-3 mt-0 pb-lg-2"><Link to={'/esqueceusenha'}>Esqueceu a Senha?</Link></p>
                            <div className='col-12'>
                                <MDBBtn outline className='mx-2 px-5 btn btn-primary link_login' color='white'  type='submit'>Login</MDBBtn>
                            </div>
                        </MDBValidation>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  );
}