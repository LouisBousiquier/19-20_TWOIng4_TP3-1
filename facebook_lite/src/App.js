import React from 'react';
import logo from './logo.svg';
import Profil from "./Profil.js";
import './App.css';
import { createRequire } from 'module';

class App extends React.Component{
  render(){
    return(
      <div>
        <Profil prenom="Louis" nom="Bousiquier" image={require("./pp.png")} date="5 févier 1997" commentaire="qlsdicglqsidugdl"/>

      </div>
    );
  }
}

export default App;
