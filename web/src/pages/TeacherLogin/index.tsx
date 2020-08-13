import React from 'react';

import logo from '../../assets/images/logo.svg';

import './styles.css';

function TeacherLogin(){
  return (
    <section className="about">
      <div className="content-proffy">
        <div>
        <img src={logo} alt=""/>
        <h2>Sua plataforma de estudos online</h2>
        </div>
      </div>

      <div className="contentForm">
        <form action="" >
        <h2>Fazer login</h2>
          <div className="input-form">
            <input type="text" placeholder="E-mail"/>
          </div>
          
          <div className="input-form">
            <input type="text" placeholder="Senha"/>
          </div>

          <div className="warning">
            <div className="checkbox">
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Lembrar-me</span>
            </label>
            </div>
            <div>
              <a href="">Esqueci minha senha</a>
            </div>
          </div>

          <div className="input-form">
            <input type="submit" value="Entrar"/>
          </div>
        </form>       
      </div>  
    </section>
  );
}

export default TeacherLogin;