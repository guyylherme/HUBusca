import React from 'react';
import Header from '../Header';

const Form = ({user,  error, buttonAction, changeUser}) =>(
    <header>
        <div className="boxBusca">
            <div className="formContainer">
                <input type="text" className="inputUser" value={user} placeholder="Usuário" onChange={e => changeUser(e.target.value)} />
            
                <button className="botaoProcurar" onClick={buttonAction}>Buscar</button>
            
                <p className="errorTexto">{error}</p>
            </div>
      </div>
    </header>
);

export default Form;