import { useLocation } from 'react-router-dom';

const EventDetail = (props) => {
    const {state} = useLocation();
    const {event} = state
    console.log(event)

    const editEvent = () => {

    }
    return (<>
        <div className="EventDetail">
            <h1>Event name: {event[1]}</h1>
        </div>
        <div className="card">
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={123124234}>Category: {event[2]}</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={123124234}>Place: {event[3]}</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={123124234}>Start on: {event[4]}</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={123124234}>Finish on: {event[5]}</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={123124234}>Created on: {event[6]}</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={123124234}>Address: {event[7]}</li>
            </ul>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={123124234}>Event Type: {event[8]}</li>
            </ul>
            
        </div>
        <button type="button" className="btn btn-primary" onClick={editEvent}>Editar</button>
    </>)
}

export default EventDetail;