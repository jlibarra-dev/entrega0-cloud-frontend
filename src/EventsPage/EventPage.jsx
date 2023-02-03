import React, { useState, useEffect, Component, useContext } from 'react';
import EvenItem from './EvenItem';
import { ReactSession } from 'react-client-session';
import { useNavigate } from 'react-router-dom';
//import SessionContext from '../Session';
var name = 'Lucas'
let backend_url = 'http://44.197.223.74:8080/'

const EventPage = () => {
    let navigate = useNavigate();
    ReactSession.setStoreType("localStorage");
    let id = ReactSession.get("id")
    const [events, setEvents] = useState([]);
    console.log('Entro una vez')

    useEffect(function effectFunction() {
        fetch(`${backend_url}/getEvents/${id}`)
            // Exito
            .then(response => response.json())  // convertir a json
            .then(json => {
                if (json.message === 'Correct query') {
                    setEvents(json.events)
                }
                else if (json.message === 'Incorrect password') {
                    console.log('Error, revisar')
                }
            })    //imprimir los datos en la consola
            .catch(err => console.log('Solicitud fallida', err)); // Capturar errores
    }, []);


    const createEvent = () => {
        return navigate('/createEvent', { state: { id: id } })
    }
    return (<>
        <div className="App">
            <h1>Welcome to the Event Manager!</h1>
        </div>
        <button type="button" className="btn btn-primary" onClick={createEvent}>Create Event</button>
        <div>
            {
                events.map((x) => {
                    return <EvenItem id={id} setEvents={setEvents} eventDetail={x} eventId={x[0]} eventName={x[1]} eventDate={'Created on: ' + x[6]}></EvenItem>
                })
            }

        </div>
    </>)


}

export default EventPage;