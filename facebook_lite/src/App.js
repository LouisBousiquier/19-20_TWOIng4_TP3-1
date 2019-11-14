import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import pp from './img/pp.png';

//component qui gère les boutons de profil
class Bouttons extends React.Component {
  render() {
      return(
          <button type="button" id="bt" style={{backgroundColor: '#008CBA', textAlign: 'center' , margintop: '7%', paddingTop:'15%',paddingBottom:'15%', font:'Bold 13px Arial', borderRadius:'12px 0 12px 0', paddingInlineStart: '15%', paddingInlineEnd:'15%', marginInlineStart:'7%',marginInlineEnd:'7%'}} onClick={this.props.onClick} > {this.props.idbutton} </button>
      );
  }
}

//component principal d'affichage, déclaration des infos et fonction de mise à jour
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
              },
              {
                  prenom : "hdf",
                  nom : "dosh",
                  image : "./pp.png",
                  date : "sdihf",
                  commentaire : "idg",
                  background : "white",
                  font : "black",
              },
              {
                  prenom : "khg",
                  nom : "jh",
                  image : "./pp.png",
                  date : "jdzifh",
                  commentaire : "jdfh",
                  background : "white",
                  font : "black",
              }
          ],
          idUtilisateur : 0,
          likeCounter0 :0,
          likeCounter1 :0,
          likeCounter2 :0
      };      
  }

  //fonction qui modifie l'id de l'utilisateur (pour changer de profil)
  handleClick(i){
      this.setState({idUtilisateur : i})
  }

  //fonction qui change la couleur du background et le texte de la fiche
  changeBackground() {
    if (this.state.background === "white"){
      this.setState(
        state => ({background : "black" , color: "white"
      }));
    } else {
      this.setState(
        state => ({background : "white" , color: "black"
      }));
    }
  }

  //fonction pour liker (le "c'est super")
  super(){
    //si l'utilisateur est l'utilisateur 0
   if (this.state.idUtilisateur===0){
      let likeCounter0 = this.state.likeCounter0;
      this.setState({
        likeCounter0 :likeCounter0 +1
      })
     }
   if (this.state.idUtilisateur===1){
      let likeCounter1 = this.state.likeCounter1;
      this.setState({
        likeCounter1 :likeCounter1 +1
      })
     }
   if (this.state.idUtilisateur===2){
      let likeCounter2 = this.state.likeCounter2;
      this.setState({
        likeCounter2 :likeCounter2 +1
      })
     }
}

//fonction qui affiche le compteur de like du profil
  superaff(){
    if (this.state.idUtilisateur===0) {
      return this.state.likeCounter0;
    }
    if (this.state.idUtilisateur===1) {
      return this.state.likeCounter1;
    }
    if (this.state.idUtilisateur===2) {
      return this.state.likeCounter2;
    }
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
          <p>{this.superaff()}</p>
          </fieldset>

              </body>
      );
  }
}

//component qui gère 'affichage du commentaire
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
