import React, { Component } from 'react';

class CardAchievement extends Component {
    render() { 
        let skills = [];
        for (let i = 0; i < this.props.achievement.hardSkills.length; i++) {
            skills.push(this.props.achievement.hardSkills[i])   
        }
        
        return (
            <div className="card m-3 p-3 col-sm-10 col-md-5 shadowNeo">
                <a href={ this.props.achievement.URL } target = "_blank" rel="noopener noreferrer">
                    <img src={ '../assets/imgAchievements/' + this.props.achievement.img} alt={ this.props.achievement.name } className="card-img-top"/>
                </a>
                <h2 className="card-title text-center h5 pt-3">{ this.props.achievement.name }</h2>
                <div className="card-body p-0">
                    <p className="card-text text-justify p-1">{ this.props.achievement.description }</p>
                    <ul className="list-unstyled d-flex justify-content-around align-items-center flex-wrap">
                        { skills.map(element => (
                            <li key = { element } className="pb-3">
                                <img src={'../assets/iconsSkills/' + element + '.png' } alt={ element } width='25' title = { element } />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        );
    }
}
 
export default CardAchievement;