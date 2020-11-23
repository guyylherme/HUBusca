import './App.css';
import {Component, useState} from 'react';
import axios from 'axios';

import Header from './Components/Header';
import Form from './Components/Form';
import ListaRepo from './Components/ListaRepo';

class App extends Component {

  state = {
    user: "",
    repositorios: [],
    error: "",
  };

  changeUser = user => {
    this.setState({ user });
  };

  searchUser = async () => {

    const { user } = this.state;

    try{

      const {data: repositorios} = await axios.get(
        `https://api.github.com/users/${ user }/repos`
      );
        console.log(repositorios)
        
      this.setState({ repositorios , error: '' })

    } catch (error) {
      this.setState({
        error: 'Usuário não encontrado',
        repositorios : []
      })
    }
  };

  render(){ 

    const { user , repositorios , error } = this.state;

    return(
    <div className="App">
      <Header />
      <Form 
        changeUser = {this.changeUser}
        user={ user }
        error= { error }
        buttonAction ={this.searchUser}
      />
      <div className="boxBody">
        <ListaRepo  repositorios={repositorios}/>
      </div>
    </div>
    );
  }
}

export default App;
