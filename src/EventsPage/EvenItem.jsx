import React, { Component } from 'react';
import './EventPage.css'
import { useNavigate } from 'react-router-dom';
let backend_url = 'http://44.197.223.74:8080/'

const EvenItem = (props) => {
    let navigate = useNavigate();
    const eventDetail = () => {
        // 👇 Get input value from "event"
        return navigate('/eventDetail/' + props.eventId, { state: { event: props.eventDetail } })
    };

    const deleteEvent = () => {
        fetch(`${backend_url}/deleteEvent/${props.eventId}`)
            // Exito
            .then(response => response.json())  // convertir a json
            .then(json => {
                console.log('Entra aqui segurisimo')
                fetch(`${backend_url}/getEvents/${props.id}`)
                    // Exito
                    .then(response => response.json())  // convertir a json
                    .then(json => {
                        if (json.message === 'Correct query') {
                            props.setEvents(json.events)
                        }
                        else if (json.message === 'Incorrect password') {
                            console.log('Error, revisar')
                        }
                    })    //imprimir los datos en la consola
                    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
                return navigate('/events')
            })    //imprimir los datos en la consola
            .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <a href="" key={props.eventId + props.eventName} onClick={eventDetail}>{props.eventName}</a>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" key={props.eventId + props.eventDate}>{props.eventDate}</li>
                </ul>
                <button type="button" className="btn btn-primary" onClick={deleteEvent}>Eliminar</button>
            </div>
        </>
    );
}

export default EvenItem;