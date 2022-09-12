import './App.scss';
import React, { Component} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CareerView, HomeView,  AchievementsView, ContactView, SkillsView }  from './views';
import { Header } from './components';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      theme: 'dark',
    }
  }

  changeTheme(){
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light'})
  }

  render() { 
    return (
    <div id="theme" className={ this.state.theme }>          
    <Router>
      <aside className="col-1 d-flex flex-column align-items-center ms-3">
        <button type="button" onClick={ this.changeTheme.bind(this) } className="darkmode btn p-0 mb-3" >
          <svg width="80" height="40">
            <line x1="20" x2="60" y1="25" y2="25" stroke="rgb(165, 162, 162)" strokeWidth="30" strokeLinecap="round"/>
            <circle cx="21" cy="25" r="11" className={ this.state.theme} />
          </svg>
          <span className = "d-block">thème { this.state.theme }</span>
        </button>
        <a href="https://jidkoffnatacha.fr/cv2022.pdf" 
          className = "text-decoration-none shadowNeo px-4 py-2 rounded-pill border border-light"
          target = "_blank" rel = "noreferrer noopener">CV</a>
      </aside>
        <Header />
      <Routes>
        <Route exact path="/" element={ <HomeView/> }></Route>
        <Route path="/parcours" element={ <CareerView /> }></Route>
        <Route path="/competences" element={ <SkillsView /> }></Route>
        <Route path="/realisations" element={ <AchievementsView/> }></Route>
        <Route path="contact" element={ <ContactView/> }></Route>
      </Routes>
    </Router>
    </div>
    );
  }
}
 
export default App;

