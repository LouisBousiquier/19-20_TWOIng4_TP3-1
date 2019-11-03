import React from 'react';
import logo from './logo.svg';
import Profil from "./Profil.js";
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div>
        <Profil prenom="Louis"/>
      </div>
    );
  }
}

export default App;
