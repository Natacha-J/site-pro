import React, { Component } from 'react';
import { CardWithList, ProgressCircle } from "../components";

class SkillsView extends Component {
    constructor(props){
        super(props)
        this.state = {
            frontSkills: [
                {
                    title: 'Maquetter une application'
                },
                {
                    title: 'Réaliser une interface utilisateur web statique et adaptable'
                },
                {
                    title: 'Développer une interface utilisateur web dynamique'
                },
            ],
            backSkills: [
                {
                    title: "Créer une base de données"
                },
                {
                    title: "Développer les composants d'accès aux données"
                },
                {
                    title: "Développer la partie back-end d'une application web"
                }, 
                {
                    title: "Elaborer et mettre en oeuvre des composants dans une application de gestion de contenu"
                }
            ],
            hardSkills:
                {
                    language:[
                        {
                            title: 'HTML',
                            level: 30
                        },
                        {
                            title: 'CSS',
                            level: 35
                        },
                        {
                            title: 'JavaScript',
                            level: 90
                        },
                        {
                            title: 'PHP',
                            level: 90
                        },
                        {
                            title: 'SQL',
                            level: 90
                        }
                    ],
                    frameworks:[
                        {
                            title: 'Bootstrap 4 & 5',
                            level: 60
                        },
                        {
                            title: 'JQuery',
                            level: 90
                        },
                        {
                            title: 'VueJS 2',
                            level: 100
                        },
                        {
                            title: 'React',
                            level: 200
                        },
                        {
                            title: 'Symfony',
                            level: 90
                        }, 
                        {
                            title: 'ApiPlatform',
                            level: 100
                        },
                        {
                            title: 'PHPMailer',
                            level: 140
                        }
                    ],
                    others: [
                        {
                            title: 'Sass',
                            level: 40
                        },
                        {
                            title: 'GIT',
                            level: 100
                        },
                        {
                            title: 'MySQL',
                            level: 40
                        },
                        {
                            title: 'SQL Server',
                            level: 150
                        },
                        {
                            title: 'WordPress',
                            level: 120
                        },
                        {
                            title: 'Power Designer',
                            level: 120
                        }
                    ]
                }
        }
    }
    render() { 
        return (
            <div>
                <h1 className="text-center my-5">Mes compétences</h1>
                <section className="mb-5 pb-3">
                    <h2 className="mx-5 px-2 h4">Langages informatiques</h2>
                    <ul className="list-unstyled d-flex mx-2 justify-content-around flex-wrap">
                            { this.state.hardSkills.language.map(item => (
                                <li className="my-4 mx-3" key= { item.title }>
                                    <ProgressCircle  title = { item.title } level = { item.level }/>
                                </li>
                            ))}
                    </ul>
                </section>
                <section className="mb-5 pb-3">
                    <h2 className="mx-5 px-2 h4">Frameworks &amp; librairies</h2>
                    <ul className="list-unstyled d-flex mx-2 justify-content-around flex-wrap">
                            { this.state.hardSkills.frameworks.map( item => (
                                <li className="my-4 mx-3" key = { item.title }>
                                    <ProgressCircle title = { item.title } level = { item.level }/>
                                </li>
                            ))}
                    </ul>
                </section>
                <section className="mb-5 pb-3">
                    <h2 className="mx-5 px-2 h4">Autres</h2>
                    <ul className="list-unstyled d-flex mx-2 justify-content-around flex-wrap">
                        { this.state.hardSkills.others.map( item => (
                            <li className="my-4 mx-3" key = { item.title }>
                                <ProgressCircle title = { item.title } level = { item.level }/>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="d-flex flex-column flex-lg-row py-5">
                    <CardWithList titleList= "Savoir-faire Front-end" itemList = { this.state.frontSkills }/>
                    <CardWithList titleList= "Savoir-faire Back-end" itemList = { this.state.backSkills }/>
                </section>

            </div>
        );
    }
}
 
export default SkillsView;