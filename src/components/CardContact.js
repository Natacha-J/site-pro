import React, { Component } from 'react';

class CardContact extends Component {
    render() { 
        return (
            <div className="bg-white d-flex flex-column col-8 col-sm-5 col-md-4 col-lg-3 rounded-3 p-3 m-3 shadowNeo cardContact">
                <img src={ "../assets/contactIcons/" + this.props.contact.icon + ".png"}
                     alt={"contact par" + this.props.contact.icon}
                     width='60'
                     className="mx-auto" />
                    <span className="pt-3">
                { this.props.contact.link ? 
                        <a href={ this.props.contact.link } className="text-decoration-none" target="_blank" rel="noopener noreferrer">{ this.props.contact.info }</a>
                        :
                        <>{ this.props.contact.info }</>
                    }
                    </span>
            </div>
        );
    }
}
 
export default CardContact;