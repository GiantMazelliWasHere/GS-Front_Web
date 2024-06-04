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
        const alerta = document.createElement('h2');
        const msg = document.getElementById('msg');
        const alertaClass = alerta.className = ('alerta');
        const limpeza = msg.innerHTML = '';
        const limpeza2 = msg.style.backgroundColor = 'transparent';
        
        e.preventDefault();
        if(nome === '') {
            limpeza2;
            alerta.innerHTML = 'Preencha seu Nome';
            msg.style.backgroundColor = 'red';
            return msg.appendChild(alerta);
        }
        if(email === '') {
            limpeza2;
            alerta.innerHTML = 'Preencha seu Email';
            msg.style.backgroundColor = 'red';
            return msg.appendChild(alerta);
        }
        alerta.innerHTML = 'Cheque seu Email';
        msg.style.backgroundColor = 'green';
        msg.appendChild(alerta);
    }

    return ( 
        <MDBContainer fluid className='esqueceusenha d-flex align-items-center justify-content-center'>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{maxWidth: '350px'}}>
                <MDBCardBody className='px-5'>
                    <h2 className="titulo text-uppercase text-center mb-5">Recuperação de Senha</h2>
                    <MDBInput wrapperClass='mb-4' label='Nome' size='lg' id='form1' type='text' placeholder='Nome Completo' value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form2' type='email' placeholder='nome@hotmail.com' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className='alerta-esqueceu' id='msg'></div>
                    <MDBBtn className='btn btn-primary continue' size='lg' type='submit' onClick={submitHandler}>Continue</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
     );
}

export default EsqueceuSenha;