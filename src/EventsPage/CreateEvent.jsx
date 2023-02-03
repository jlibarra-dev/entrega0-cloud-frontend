
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
let backend_url = 'http://44.197.223.74:8080/'

const CreateEvent = (props) => {
    let navigate = useNavigate();
    const {state} = useLocation();
    const {id} = state

    const [eventName, seteventName] = useState('');
    const [category, setcategory] = useState('');
    const [Place, setPlace] = useState('');
    const [StartDate, setStartDate] = useState('');
    const [EndDate, setEndDate] = useState('');
    const [Address, setAddress] = useState('');
    const [eventType, seteventType] = useState('');

    const eventNameHandleChange = (event) => {
        seteventName(event.target.value)
    }
    const PlaceHandleChange = (event) => {
        setPlace(event.target.value)
    }
    const StartDateHandleChange = (event) => {
        setStartDate(event.target.value)
    }
    const EndDateHandleChange = (event) => {
        setEndDate(event.target.value)
    }
    const AddressHandleChange = (event) => {
        setAddress(event.target.value)
    }
    const eventSelectHandleChange = (event) => {
        setcategory(document.getElementById('event-select').value)
    }

    const createEvent = () => {
        fetch(`${backend_url}/createEvent/${eventName.replace('%20', " ")}/${document.getElementById('event-select').value}/${Place}/${StartDate}/${EndDate}/${Address}/${document.getElementById('event-type-select').value}/${id}`)
            // Exito
            .then(response => response.json())  // convertir a json
            .then(json => {
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
    return (<>
        <div className="App">
            <h1>Welcome to the Event Creator!</h1>
        </div>
        <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Event name</label>
            <input type="text" className="form-control" id="userEmail" placeholder="Event name" onChange={eventNameHandleChange} />

        </div>
        <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Category</label><br />
            <select name="eventSelect" id="event-select" onChange={eventSelectHandleChange}>
                <option value="">--Please choose an option--</option>
                <option value="Conferencia">Conferencia</option>
                <option value="Seminario">Seminario</option>
                <option value="Curso">Curso</option>
                <option value="Congreso">Congreso</option>
            </select>

        </div>
        <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Place</label>
            <input type="text" className="form-control" id="userEmail" placeholder="Place" onChange={PlaceHandleChange} />

        </div>
        <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Start date</label>
            <input type="date" className="form-control" id="userEmail" placeholder="name@example.com" onChange={StartDateHandleChange} />

        </div>
        <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Finish date</label>
            <input type="date" className="form-control" id="userEmail" placeholder="name@example.com" onChange={EndDateHandleChange} />

        </div>
        <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Address</label>
            <input type="text" className="form-control" id="userEmail" placeholder="Address" onChange={AddressHandleChange} />

        </div>
        <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">Event type</label><br />
            <select name="eventType" id="event-type-select">
                <option value="">--Please choose an option--</option>
                <option value="Virtual">Virtual</option>
                <option value="Presencial">Presencial</option>
            </select>

        </div>

        <button type="button" className="btn btn-primary" onClick={createEvent}>Create</button>
    </>)
}

export default CreateEvent;