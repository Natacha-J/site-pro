import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            openMenu: true
        };
    }

    openNav = () => {
        this.setState({ openMenu: !this.state.openMenu})
    }

    render() { 
        return (
            <header>
                <nav className="d-flex align-items-center pt-4 align-content-center">
                    <button className="btn py-3 px-1" onClick = { this.openNav }>
                        <svg width="30" height="30">
                            <line x1="5" x2="25" y1="5" y2="5" stroke="#cea62d" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="5" x2="25" y1="13" y2="13" stroke="#cea62d" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="5" x2="25" y1="21" y2="21" stroke="#cea62d" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <ul className={ this.state.openMenu ? "menuOpen" : "menuClose"}>
                        <li className="px-3 py-sm-2 px-sm-2 px-md-4 mx-auto list-inline-item"><Link className="text-decoration-none" to="/">Accueil</Link></li>
                        <li className="px-3 py-sm-2 px-sm-2 px-md-4 mx-auto list-inline-item"><Link className="text-decoration-none" to="/parcours">Parcours</Link></li>
                        <li className="px-3 py-sm-2 px-sm-2 px-md-4 mx-auto list-inline-item"><Link className="text-decoration-none" to="/competences">Compétences</Link></li>
                        <li className="px-3 py-sm-2 px-sm-2 px-md-4 mx-auto list-inline-item"><Link className="text-decoration-none" to="/realisations">Réalisations</Link></li>
                        <li className="px-3 py-sm-2 px-sm-2 px-md-4 mx-auto list-inline-item"><Link className="text-decoration-none" to="/contact">Me contacter</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
 
export default Header;