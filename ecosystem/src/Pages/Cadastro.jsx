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
  import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const submitHandler = (e) => {
    const msgNome = document.getElementById('msgNome');
    const msgSobrenome = document.getElementById('msgSobrenome');
    const msgEmail = document.getElementById('msgEmail');
    const msgTelefone = document.getElementById('msgTelefone');
    const msgEndereco = document.getElementById('msgEndereco');
    const msgSenha = document.getElementById('msgSenha');
    const msgConfimacao = document.getElementById('msgConfimacao');
    const msgSucesso = document.getElementById('msgSucesso');
    const msgTermos = document.getElementById('msgTermos');
    const limpezaNome = msgNome.innerHTML = '';
    const limpezaSobrenome = msgSobrenome.innerHTML = '';
    const limpezaEmail = msgEmail.innerHTML = '';
    const limpezaTelefone = msgTelefone.innerHTML = '';
    const limpezaEndereco = msgEndereco.innerHTML = '';
    const limpezaSenha = msgSenha.innerHTML = '';
    const limpezaConfimacao = msgConfimacao.innerHTML = '';
    const limpezaTermos = msgTermos.innerHTML = '';



    e.preventDefault();
    if(nome === '') {
        msgNome.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Nome!</div>';
        return false;
      }
    if(sobrenome === '') {
        msgSobrenome.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Sobrenome!</div>';
        return false;
    }
    if(email === '') {
        msgEmail.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Email!</div>';
        return false;
    }
    if(telefone === '') {
        msgTelefone.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Telefone!</div>';
        return false;
    }

    if(endereco === '') {
        msgEndereco.innerHTML = '<div class="alert alert-danger" role="alert">Forneça seu Endereço!</div>';
        return false;
    }

    if(senha === '') {
        msgSenha.innerHTML = '<div class="alert alert-danger" role="alert">Crie uma Senha com mais de 8 digitos!</div>';
        return false;
    }

    if(senha.length < 8){
      msgSenha.innerHTML = '<div class="alert alert-danger" role="alert">Crie uma Senha com mais de 8 digitos!</div>';
      return false;
    }
    
    if(confirmarSenha === '') {
        msgConfimacao.innerHTML = '<div class="alert alert-danger" role="alert">Confirme sua Senha!</div>';
        return false;
    }
    
    if(confirmarSenha !== senha) {
        msgConfimacao.innerHTML = '<div class="alert alert-danger" role="alert">Senhas não correspondem!</div>';
        return false;
    }

    if(termos === false) {
      msgTermos.innerHTML = '<div class="alert alert-danger" role="alert">Aceite os Termos e Políticas de Serviço!</div>';
      return false;
    }
    msgSucesso.innerHTML = '<div class="alert alert-success" role="alert">Cadastro Realizado com Sucesso!</div>';
    localStorage.setItem('nome', nome);
    localStorage.setItem('sobrenome', sobrenome);
    localStorage.setItem('email', email);
    localStorage.setItem('telefone', telefone);
    localStorage.setItem('endereco', endereco);
    localStorage.setItem('complemento', complemento);
    localStorage.setItem('senha', senha);
    localStorage.setItem('termos', termos);
    localStorage.setItem('informativos', informativos);
    console.log(`Nome: ${nome} Sobrenome: ${sobrenome} Email: ${email} Telefone: ${telefone} Endereço: ${endereco} Complemento: ${complemento} Senha: ${senha}`);
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
                  <div id='msgNome'></div>
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Sobrenome' size='lg' id='form2' type='text' value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
                  <div id='msgSobrenome'></div>
                </MDBCol>

              </MDBRow>

              <MDBRow>

                <MDBCol md=''>
                  <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <div id='msgEmail'></div>
                </MDBCol>
                
                <MDBCol md='3'>
                  <MDBInput wrapperClass='mb-4' label='telefone' size='lg' id='form5' type='text' value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                  <div id='msgTelefone'></div>
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
                  <MDBInput wrapperClass='mb-4' label='Endereço' size='lg' id='form4' type='text' value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                  <div id='msgEndereco'></div>
                </MDBCol>

                <MDBCol md='4'>
                  <MDBInput wrapperClass='mb-4' label='Complemento' size='lg' id='form5' type='text' value={complemento} onChange={(e) => setComplemento(e.target.value)}/>
                </MDBCol>

              </MDBRow>
              <MDBRow>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Senha (8 digitos)' size='lg' id='form4' type='password' value={senha} onChange={(e) => setSenha(e.target.value)}/>
                  <div id='msgSenha'></div>
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Confirme a Senha' size='lg' id='form5' type='password' value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)}/>
                  <div id='msgConfimacao'></div>
                </MDBCol>

              </MDBRow>
              <hr/>
              <MDBCheckbox id='checkbox1' label='Desejo receber emails informativos.' value={informativos} onChange={(e) => setInformativos(true)}/>
              <MDBCheckbox id='checkbox2' label='Aceito os termos e políticas de serviço.' value={termos} onChange={(e) => setTermos(true)}/>
              <div id='msgTermos'></div>
              
              <div id='msgSucesso'></div>
              <MDBBtn className='mt-1 w-100 btn_cadastro' size='lg' type='submit' onClick={submitHandler}>Cadastre-se</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Cadastro;