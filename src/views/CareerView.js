import React, { Component } from 'react';
import { CardWithList } from "../components";

class CareerView extends Component {
    constructor(props){
        super(props)
        this.state = {
            formations: [
                {
                    date: '2022',
                    title: 'Certificat de réussite React',
                    organization: 'DYMA'
                }, 
                {
                    date: '2022',
                    title: 'Certificat de réussite TypeScript',
                    organization: 'DYMA'
                },
                {
                    date: '2021/2022',
                    title: 'Titre Développement Web & Web Mobile',
                    organization: 'AFPA'
                },
                {
                    date: '2021',
                    title: 'Certificat de réussite VueJS 2',
                    organization: 'DYMA'
                },
                {
                    date: '2020',
                    title: 'Certificat de formation Internet & développement',
                    organization: 'CNFDI'
                },
                                {
                    date: '2019/2020',
                    title: 'Autodidacte en développement web',
                },
                                {
                    date: '2009',
                    title: 'Licence de psychologie',
                    organization: 'Paris 8'
                },             
                {
                    date: '2005',
                    title: 'Bac Economique et Social',
                    organization: 'Lycée Merleau Ponty (17)'
                },
            ],
            experience: [
                {
                    date: '2022',
                    title: 'Stage développeuse front-end',
                    organization: 'Avanade (75, remote)'
                },
                {
                    date: '2015/2021',
                    title: 'Employée libre-service',
                    organization: 'Marché de Léopold (33)'
                },
                {
                    date: '2015',
                    title: 'Opératrice de ligne d\'embouteillage',
                    organization: 'Randstad (33)'
                },
                {
                    date:'2014/2015',
                    title: 'Assistante pédagogique',
                    organization: 'Collège Elie Faure (33)'
                },
                {
                    date:'2014',
                    title: 'Aide viticole',
                    organization: 'Aquitaine viti-service (33)'
                },
            ]
        }
    }
    render() { 
        return (
            <>
            <h1 className="text-center my-5">Mon parcours</h1>
            <section className="d-flex flex-column flex-lg-row justify-content-between mx-2 col-sm-8 mx-sm-auto col-md-12">
                <CardWithList key={ this.state.formations.title} titleList='Formations' itemList={ this.state.formations}/>
                <CardWithList key={ this.state.experience.title} titleList='Expériences professionnelles' itemList={ this.state.experience}/>
            </section>
            </>
        );
    }
}
 
export default CareerView;