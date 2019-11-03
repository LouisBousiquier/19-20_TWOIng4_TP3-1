import React from 'react';
import './Profil.css';

class Profil extends React.Component{
    render(){
        return(
           <body>
            <header>
                <button className={'button'} id={"jeanne"}>Jeanne</button>
                <button className={'button'} id={"martine"}>Martine</button>
                <button className={'button'} id={"claude"}>Claude</button>
            </header>
                
                <fieldset id={"card"} className={' card d-flex align-items-center border'}>
                    <img src={require('pp.png')}/>

                    <article className={"info"}>
                        <div className={"first_name"} >
                            <p>Louis</p>
                        </div>
                        <div className={"last_name"}>
                            <p>Bousiquier</p>
                        </div>
                    </article>

                    <div className={"date"}>
                           <p> 5 février 1997</p>
                    </div>

                    <div>
                        <button className={'style'}>Change style!</button>
                    </div>

                </fieldset>

            <fieldset className={'com'}>
                <article className={'t_com'}>
                    <p>
                        lsjqfdghmlsqjhglkjs:vjhqskjgh;qkjh
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