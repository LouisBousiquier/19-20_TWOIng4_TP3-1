import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import pp from './img/pp.png';

class Bouttons extends React.Component {
  render() {
      return(
          <button type="button" id="bt" style={{backgroundColor: 'blue' , margintop: '7%', paddingTop:'15%',paddingBottom:'15%', font:'Bold 13px Arial', borderRadius:'12px 0 12px 0', paddingInlineStart: '15%', paddingInlineEnd:'15%', marginInlineStart:'7%',marginInlineEnd:'7%'}} onClick={this.props.onClick} > {this.props.idbutton} </button>
      );
  }
}

class Profil extends React.Component{
  constructor(props){
      super(props);
      this.super = this.super.bind(this);
      this.state= {
        
          val: null,
          user : [
              {
                  prenom : "blalzdjf",
                  nom : "bousiquier" ,
                  image : pp,
                  date : "5 février 1997",
                  commentaire : "ligl",
                  background : "white",
                  color : "black",
                  //liked : false,
                  //likeCounter :0,
              },
              {
                  prenom : "hdf",
                  nom : "dosh",
                  image : "./pp.png",
                  date : "sdihf",
                  commentaire : "idg",
                  background : "white",
                  font : "black",
                  liked : false,
                  likeCounter :0,
              },
              {
                  prenom : "khg",
                  nom : "jh",
                  image : "./pp.png",
                  date : "jdzifh",
                  commentaire : "jdfh",
                  background : "white",
                  font : "black",
                  liked : false,
                  likeCounter :0,
              }
          ],
          idUtilisateur : 0
      };      
      //this.handleClick= this.handleClick.bind(this);
  }
  handleClick(i){
      this.setState({idUtilisateur : i})
  }
  changeBackground() {
    if (this.state.background === "white"){
      this.setState(
        state => ({background : "black" , color: "white"
      }));
      //alert(this.state.user[this.state.idUtilisateur].background)
      //{alert(this.state.idUtilisateur)}
    } else {
      this.setState(
        state => ({background : "white" , color: "black"
      }));
      //alert(this.state.user[this.state.idUtilisateur].background)
    }
  }

  //fonction pour liker (le "c'est super")
  super(){
    let likeCounter = this.state.likeCounter;
   // likeCounter += !this.state.liked ? 1 : -1
   this.setState({
     likeCounter : likeCounter +1
   }) 
}
  render(){
      return(
         <body>
          <header>
            <div className="buttons d-flex">
              <Bouttons className="b1" idbutton={this.state.user[0].prenom} onClick={() => this.handleClick(0)}/>
              <Bouttons  idbutton={this.state.user[1].prenom} onClick={() => this.handleClick(1)}/>
              <Bouttons  idbutton={this.state.user[2].prenom} onClick={() => this.handleClick(2)}/>
            </div>
          </header>
              
              <fieldset id={"card"} className={' card d-flex align-items-center border'} style={{background : this.state.background}}>
                  
              
              <div className="image">
              <img src={this.state.user[this.state.idUtilisateur].image}></img>
              </div>

                  <article className={"info"} >
                      <div className={"first_name"} >
                          <p style={{color : this.state.color}}>{this.state.user[this.state.idUtilisateur].prenom}</p>
                      </div>

                      <div className={"last_name"}>
                          <p style={{color : this.state.color}}>{this.state.user[this.state.idUtilisateur].nom}</p>
                      </div>
                  </article>

                  <div className={"date"}>
                         <p style={{color : this.state.color}}> {this.state.user[this.state.idUtilisateur].date}</p>
                  </div>

                  <div>
                      <button className={'style'} onClick={() => this.changeBackground()}>
                        
                        Change style!</button>
                  </div>

              </fieldset>

          <fieldset className={'com'} style={{background: this.state.background, color : this.state.color}}>
              <Com 
              comm={this.state.user[this.state.idUtilisateur].commentaire}
              />
              <button className="super" id="super" onClick={() => this.super()} >
          c'est super</button>
          <p style={{color: 'red'}}>{this.state.like}lk</p>
          </fieldset>

              </body>
      );
  }
}

class Com extends React.Component{

  render(){
    return(
      <div>
        <article className="t_com">
          <p>
            {this.props.comm}
          </p>     
        </article>
      </div>
    );
  }
}

export default Profil;
