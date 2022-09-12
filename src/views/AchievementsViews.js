import React, { Component } from 'react';
import { CardAchievement } from '../components';

class AchievementsView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            achievements: [
                {
                    name: 'Le paradis du vin',
                    img: 'wine_paradise.jpg',
                    URL: 'https://jidkoffnatacha.fr/cave/public/',
                    description: 'Interface sécurisée de gestion d\'une cave. Une inscription est nécessaire pour y accéder.',
                    hardSkills: ['html', 'css', 'sass', 'js', 'jquery', 'php', 'symfony']
                },
                {
                    name: 'Société de distribution de bières',
                    img: 'sdbm_mvc.jpg',
                    URL: 'https://jidkoffnatacha.fr/sdbm/',
                    description: 'Interface permettant au gérant d\'administrer intégralement les ajouts, modifications et suppression des articles présents.',
                    hardSkills: ['html', 'css', 'bootstrap', 'js', 'jquery', 'php', 'mysql']
                },
                {
                    name: 'Découvrir Bordeaux',
                    img: 'wp_bordeaux.jpg',
                    URL: 'https://jidkoffnatacha.fr/ville-de-bordeaux/',
                    description: 'Site présentant la ville de Bordeaux. Vous pourrez découvrir son histoire, sa situation géographique, ses données démographiques mais également une page consacrée à la découvre de cette magnifique ville.',
                    hardSkills: ['html', 'css', 'wordpress']
                },
                {
                    name: 'Entreprise de menuiserie',
                    img: 'entreprise_bois.jpg',
                    URL: 'https://jidkoffnatacha.fr/entreprise-menuiserie/',
                    description: 'Site vitrine réalisé pour un artisan menuisier en auto-entreprise. Il possède un tableau de bord permettant à l\'artisan de rajouter lui-même ses propres réalisations',
                    hardSkills: ['html', 'css', 'js', 'jquery', 'php']
                },
                {
                    name: 'Gestionnaire d\'une cave à vin',
                    img: 'wine_js.jpg',
                    URL: 'https://jidkoffnatacha.fr/gestionnaire-de-vin/',
                    description: 'Une interface de gestion des vins de type catalogue. Elle est utile au propriétaire de la cave pour ajouter, modifier, supprimer des vins mais également pour gérer les stocks et les suggestions de mets.',
                    hardSkills: ['html', 'css', 'js', 'jquery']
                }
            ],
        }
    }
    render() { 
        return (
            <>
                <h1 className="text-center my-5">Mes réalisations</h1>
                <section className="d-flex flex-wrap justify-content-center">
                { this.state.achievements.map( item => (
                    <CardAchievement key = { item.name } achievement = { item }/>
                ))}
                </section>
            </>
        );
    }
}
 
export default AchievementsView;