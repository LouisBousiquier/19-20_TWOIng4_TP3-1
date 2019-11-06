import React from 'react';
import './Profil.css';
import { createRequire } from 'module';


/*const Jeanne = {
    pers: {
        prenom: "Jeanne",
        nom: "Dupont",
        naiss: "5 février 1997"
    },
    publi: "blabla",
    image:{
        src:"pp.png"
    }
} 
const Martine = {
    pers: {
        prenom: "Martine",
        nom: "Dupond",
        naiss: "12 avril 1998"
    },
    publi: "blibli",
    image:{
        src:"pp.png"
    }
}
const Claude = {
    pers: {
        prenom: "Claude",
        nom: "Truc",
        naiss: "1 décembre 1999"
    },
    publi: "blublu",
    image:{
        src:"pp.png"
    }
}
*/
const profils=[{
    nom:"Jeanne"
},
{
    nom:"Martine"
},
{
    nom:"Claude"
}
];
class Profil extends React.Component{
    constructor(props){
        super(props);
        this.state= {value: null,};
        this.handleClick= this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({value: document.getElementById("jeanne").onclick}));
        alert( this.state);
    }
    render(){
        //const {pers, publi, image}= this.props.profil;

        return(
           <body>
            <header>
                <button className={'button'} id={"jeanne"} onClick={this.handleClick}>Jeanne</button>
                <button className={'button'} id={"martine"}>Martine</button>
                <button className={'button'} id={"claude"}>Claude</button>
            </header>
                
                <fieldset id={"card"} className={' card d-flex align-items-center border'}>
                    
                
                <div className="image">
                <img src={this.props.image}></img>
                </div>

                    <article className={"info"}>
                        <div className={"first_name"} >
                            <p>{this.props.prenom}</p>
                            
                        </div>
                        
                        
                        <div className={"last_name"}>
                            <p>{this.props.nom}</p>
                        </div>
                    </article>

                    <div className={"date"}>
                           <p> {this.props.date}</p>
                    </div>

                    <div>
                        <button className={'style'}>Change style!</button>
                    </div>

                </fieldset>

            <fieldset className={'com'}>
                <article className={'t_com'}>
                    <p>
                        {this.props.commentaire}
                    </p>
                </article>
                <button className={'super'}>
                    C'est super !
                </button>

            </fieldset>
                </body>
        );
    }
}



export default Profil;