import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function EsqueceuSenha() {
    return ( 
        <MDBContainer fluid className='esqueceusenha d-flex align-items-center justify-content-center'>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '600px'}}>
                <MDBCardBody className='px-5'>
                    <h2 className="titulo text-uppercase text-center mb-5">Recuperação de Senha</h2>
                    <MDBInput wrapperClass='mb-4' label='Nome' size='lg' id='form1' type='text'/>
                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='email'/>
                    <MDBBtn className='mb-4 gradient-custom-4 continue' size='lg'>Continue</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
     );
}

export default EsqueceuSenha;