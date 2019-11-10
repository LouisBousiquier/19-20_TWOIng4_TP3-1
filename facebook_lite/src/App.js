import React from 'react';
import logo from './logo.svg';
//import Profil from "./Profil.js";
import './App.css';
//import { createRequire } from 'module';
import {Nav, NavItem, NavLink} from 'reactstrap';
import pp from './img/pp.png';

class Bouttons extends React.Component {
  render() {
      return(
          <button onClick={this.props.onClick} > {this.props.idbutton} </button>
      );
  }
}

class Profil extends React.Component{
  constructor(props){
      super(props);
      this.state= {
        
          val: null,
          user : [
              {
                  prenom : "blalzdjf",
                  nom : "bousiquier" ,
                  image : pp,
                  date : "5 février 1997",
                  commentaire : "ligl",
                  like : 0,
                  background : "white",
                  font : "black"
              },
              {
                  prenom : "hdf",
                  nom : "dosh",
                  image : "./pp.png",
                  date : "sdihf",
                  commentaire : "idg",
                  like : 0,
                  background : "white",
                  font : "black"
              },
              {
                  prenom : "khg",
                  nom : "jh",
                  image : "./pp.png",
                  date : "jdzifh",
                  commentaire : "jdfh",
                  like : 0,
                  background : "white",
                  font : "black"
              }
          ],
          idUtilisateur : 0
      };      
      //this.handleClick= this.handleClick.bind(this);
  }
  handleClick(i){
      this.setState({idUtilisateur : i})
  }
  changeBackground(){
    if (this.state.background === "white"){
      this.setState(
        state => ({background : "blue" 
      }))
      //alert(this.state.user[this.state.idUtilisateur].background)
      //{alert(this.state.idUtilisateur)}
    } else{
      this.setState(
        state => ({background : "white" 
      }))
      //alert(this.state.user[this.state.idUtilisateur].background)
    }
    
  }
  render(){
      //const {pers, publi, image}= this.props.profil;

      return(
         <body>
          <header>
            <div className="button">
              <Bouttons idbutton={this.state.user[0].prenom} onClick={() => this.handleClick(0)}/>
              <Bouttons idbutton={this.state.user[1].prenom} onClick={() => this.handleClick(1)}/>
              <Bouttons idbutton={this.state.user[2].prenom} onClick={() => this.handleClick(2)}/>
            </div>
          </header>
              
              <fieldset id={"card"} className={' card d-flex align-items-center border'} style={{background : this.state.background}}>
                  
              
              <div className="image">
              <img src={this.state.user[this.state.idUtilisateur].image}></img>
              </div>

                  <article className={"info"} >
                      <div className={"first_name"} >
                          <p>{this.state.user[this.state.idUtilisateur].prenom}</p>
                      </div>

                      <div className={"last_name"}>
                          <p>{this.state.user[this.state.idUtilisateur].nom}</p>
                      </div>
                  </article>

                  <div className={"date"}>
                         <p> {this.state.user[this.state.idUtilisateur].date}</p>
                  </div>

                  <div>
                      <button className={'style'} onClick={() => this.changeBackground()} >
                        
                        Change style!</button>
                  </div>

              </fieldset>

          <fieldset className={'com'}>
              <Com 
              comm={this.state.user[this.state.idUtilisateur].commentaire}
              like={this.state.user[this.state.idUtilisateur].like}
             // onClick={() =>this.state.super(this.state.idUtilisateur) }
              />
          </fieldset>

              </body>
      );
  }
}

class Com extends React.Component{
  constructor(props){
    super(props);
    this.sate={
      liked : false,
      likeCounter :0
    }
  }
    //fonction pour liker (le "c'est super")
  super(i){
      let likeCounter = this.state.likeCounter;
      likeCounter += !this.state.liked ? 1 : -1
      this.setState({
          liked : !this.state.liked,
          likeCounter : likeCounter
      })
  }

  render(){
    return(
      <div>
        <article className="t_com">
          <p>
            {this.props.comm}
          </p>     
        </article>

        <button className="super" id="super" onClick={this.props.onClick} >
          c'est super
         
        </button>
        <span>{this.props.likeCounter}</span>
      </div>
    );
  }
}

export default Profil;
