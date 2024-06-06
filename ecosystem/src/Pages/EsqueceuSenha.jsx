import {React, useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

function EsqueceuSenha() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    
    const submitHandler = (e) => {
        const msgnome = document.getElementById('msgNome');
        const msgEmail = document.getElementById('msgEmail');
        const msgSucesso = document.getElementById('msgSucesso');
        const limpezaNome = msgnome.innerHTML = '';
        const limpezaEmail = msgEmail.innerHTML = '';
       
        
        e.preventDefault();
        if(nome === '') {
            msgnome.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Nome!</div>';
            return false;
        }
        if(email === '') {
            msgEmail.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Email!</div>';
            return false;
        }
        limpezaNome;
        limpezaEmail;
        msgSucesso.innerHTML = '<div class="alert alert-success" role="alert">Cheque seu Email!</div>';
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        console.log(`Nome: ${localStorage.getItem('nome')} Email: ${localStorage.getItem('email')}`);
    }

    return ( 
        <MDBContainer fluid className='esqueceusenha d-flex align-items-center justify-content-center'>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '350px'}}>
                <MDBCardBody className='px-5'>
                    <h2 className="titulo text-uppercase text-center mb-5">Recuperação de Senha</h2>
                    <MDBInput wrapperClass='mb-4' label='Nome' size='lg' id='form1' type='text' placeholder='Nome Completo' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <div id='msgNome'></div>
                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='email' placeholder='nome@hotmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div id='msgEmail'></div>
                    <div id='msgSucesso'></div>
                    <MDBBtn className='btn btn-primary continue' size='lg' type='submit' onClick={submitHandler}>Continue</MDBBtn>
                    
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
     );
}

export default EsqueceuSenha;