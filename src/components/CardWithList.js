import React, { Component } from 'react';

class CardWithList extends Component {
    render() { 
        return (
            <div className="card mx-auto animateCard col-11 col-md-7 col-lg-5 mb-4">
                <h2 className="card-header h4 text-center darkmode">{ this.props.titleList } </h2>
                <div className="card-body p-1 mx-md-3">
                    <ul className="list-unstyled">
                        { this.props.itemList.map( item => (
                            <li className="mb-3" key={ item.title }>
                                { item.date ? <b className="m-2">&#8227; { item.title }</b> : <div className="m-2">&#8227; { item.title }</div> }
                                <div className="ms-3">
                                    { item.date ? item.date : null }
                                    { item.organization ? ' - '+ item.organization : null} 
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default CardWithList;