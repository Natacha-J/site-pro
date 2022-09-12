import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'front-end',
            titleAnimation: 'titleAnimation'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({title: 'back-end'})           
        }, 3900);
        setTimeout(() => {           
            this.setState({ title: 'fullStack'})
        }, 7000);
    }
    render() { 
        return (
            <section className="d-flex flex-column">
                <h1 id="mainTitle" className="my-5 mx-4 text-center">Bonjour,
                    <br/>Je m'appelle <span className="d-inline-block mb-5">Natacha JIDKOFF</span>,
                    <br/>Je suis 
                    <span className="d-block">développeuse <span className={ this.state.titleAnimation }>{ this.state.title }</span></span>
                </h1>
                <p className="m-3 fst-italic text-center col-8 mx-auto">
                    Je me suis lancée dans l'apprentissage du code en autodidacte début 2019 . Ce fut une réelle révélation 
                    professionnelle pour moi et depuis je ne cesse d'enrichir mes connaissances et de coder. Ma motivation 
                    sans faille et ma soif d'apprendre me pousse chaque jour à me surpasser pour atteindre mes objectifs.
                </p>
                <Link to="/competences" className="btn link my-5 mx-auto">Découvrir mes compétences </Link>
            </section>
        );
    }
}
 
export default HomeView;