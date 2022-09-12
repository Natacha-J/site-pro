import React, { Component } from 'react';
import { CardContact } from '../components';

class ContactView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactData: [
                {
                    icon: 'phone',
                    info: '06.85.89.65.40'
                },
                {
                    icon: 'mail',
                    info: 'jidkoffnatacha@gmail.com'
                },
                {
                    icon: 'linkedIn',
                    info: 'natacha-jidkoff',
                    link: 'https://www.linkedin.com/in/natacha-jidkoff/'
                }
            ]
        }
    }
    render() { 
        return (
            <>
                <h1 className="mb-5 text-center my-5">Me contacter</h1>
                <div className="text-center d-flex flex-wrap justify-content-around">
                    { this.state.contactData.map( el => (
                        <CardContact key = { el.icon } contact = { el }/>
                    ))}
                </div>
            </>
        );
    }
}
 
export default ContactView;