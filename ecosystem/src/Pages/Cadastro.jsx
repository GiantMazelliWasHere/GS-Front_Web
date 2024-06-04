import {React, useState} from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [termos, setTermos] = useState(false);
  const [informativos, setInformativos] = useState(false);

  const submitHandler = (e) => {
    const alerta = document.createElement('h2');
    const msg = document.getElementById('msg');
    const limpeza = msg.innerHTML = '';
    const limpeza2 = msg.style.backgroundColor = 'transparent';
    
    e.preventDefault();
    if(nome === '') {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Informe seu nome';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
      }
    if(sobrenome === '') {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Informe seu sobrenome';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }
    if(email === '') {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Informe seu email';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }
    if(telefone === '') {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Informe seu telefone';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }

    if(endereco === '') {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Informe seu endereço';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }

    if(senha === '') {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Crie uma senha';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }

    if(senha.length < 8){
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Senha deve ter no mínimo 8 caracteres';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }
    
    if(confirmarSenha === '') {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Confirme a senha';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }
    
    if(confirmarSenha !== senha) {
        limpeza
        alerta.className = ('alerta', 'w-100');
        alerta.innerHTML = 'Senhas não conferem';
        msg.style.backgroundColor = 'red';
        return msg.appendChild(alerta);
    }

    if(termos === false) {
      limpeza;
      alerta.className = ('alerta', 'w-100');
      alerta.innerHTML = 'Aceite os termos';
      msg.style.backgroundColor = 'red';
      return msg.appendChild(alerta);
    }
    alerta.innerHTML = 'Cadastro Realizado com Sucesso';
        msg.style.backgroundColor = 'green';
        msg.appendChild(alerta);

  }




  return (
    <>
      <MDBContainer fluid>

        <MDBRow className='justify-content-center align-items-center m-5'>

          <MDBCard >
            <MDBCardBody className='px-4'>

              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Cadastro</h3>

              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Nome' size='lg' id='form1' type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Sobrenome' size='lg' id='form2' type='text' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                </MDBCol>

              </MDBRow>

              <MDBRow>

                <MDBCol md=''>
                  <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </MDBCol>
                
                <MDBCol md='3'>
                  <MDBInput wrapperClass='mb-4' label='telefone' size='lg' id='form5' type='rel' value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                </MDBCol>

                <MDBCol md='4' className='mb-4'>
                  <h6 className="fw-bold">Gênero: </h6>
                  <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Feminino' inline />
                  <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Masculino' inline />
                  <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Outro' inline />
                </MDBCol>

              </MDBRow>

              <MDBRow>

                <MDBCol md='8'>
                  <MDBInput wrapperClass='mb-4' label='Endereço' size='lg' id='form4' type='email' value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                </MDBCol>

                <MDBCol md='4'>
                  <MDBInput wrapperClass='mb-4' label='Complemento' size='lg' id='form5' type='rel' value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                </MDBCol>

              </MDBRow>
              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Senha' size='lg' id='form4' type='email' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Confirme a Senha' size='lg' id='form5' type='rel' value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
                </MDBCol>

              </MDBRow>
              <hr/>
              <MDBCheckbox id='checkbox1' label='Desejo receber emails informativos.' value={informativos} onChange={(e) => setInformativos(true)}/>
              <MDBCheckbox id='checkbox2' label='Aceito os termos e políticas de serviço.' value={termos} onChange={(e) => setTermos(true)}/>
              <div id="msg"></div>

              <MDBBtn className='mt-1 w-100 btn_cadastro' size='lg' type='submit' onClick={submitHandler}>Cadastre-se</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Cadastro;