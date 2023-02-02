import React, { Component } from 'react';
import './EventPage.css'

class EvenItem extends Component {  
    render() {
        return (
            <>
                <div className="card">
                        <div className="card-body">
                            <a href="">{this.props.eventName}</a>          
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{this.props.eventDate}</li>
                        </ul>
                        <button type="button" className="btn btn-primary">Eliminar</button>
                    </div>
            </>
        );
    }
}

export default EvenItem;