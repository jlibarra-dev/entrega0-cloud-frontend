import React, { Component } from 'react';
import EvenItem from './EvenItem';
import { ReactSession }  from 'react-client-session';
var name = 'Lucas'
var eventos = [[1, 'Evento 1', 'Conferencia', 'Uniandes', 'Cr. 3', '12-08-2000', '12-08-2022'],
[2, 'Evento 2', 'Seminario', 'Uniandes Chia', 'Cr. 4', '12-08-2001', '12-08-2022'],
[2, 'Evento 2', 'Seminario', 'Uniandes Chia', 'Cr. 4', '12-08-2001', '12-08-2022'],
[2, 'Evento 2', 'Seminario', 'Uniandes Chia', 'Cr. 4', '12-08-2001', '12-08-2022'],
[2, 'Evento 2', 'Seminario', 'Uniandes Chia', 'Cr. 4', '12-08-2001', '12-08-2022'],
[2, 'Evento 2', 'Seminario', 'Uniandes Chia', 'Cr. 4', '12-08-2001', '12-08-2022']]

const EventPage = () => {
    console.log(ReactSession.get("id"))
    return (
        <>
            <div className="App">
                <h1>Welcome to the Event Manager {name}!</h1>
            </div>
            <div>
                {
                    eventos.map((x) => {
                        return <EvenItem eventName={x[1]} eventDate={x[5] + ' to ' + x[6]}></EvenItem>
                    })
                }

            </div>
        </>
    );
}

export default EventPage;