import React from 'react';
import moment from 'moment';

function ReadyCard(props) {
    const buttonStyle = {
        top: 0,
        right: 0,
    }

    const places = props.places.map((place,id) => {
        return (
            <div key = {place.id}>
                {(id !== 0)? <hr></hr>: ''}
                <div className = 'position-relative' >
                    <h4>{place.name} - <i>{place.positionOrDegree}</i></h4>

                        <p>From {moment(place.startDate).format('MMMM YYYY')} to {moment(place.endDate).format('MMMM YYYY')}.</p>

                        <p>{place.details}</p>
                        <div className="position-absolute" style = {buttonStyle}>
                            <button 
                                type="submit" 
                                className="btn btn-primary" 
                                onClick={() => {props.onEdit(place.id)}}
                                >
                                Edit
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-danger ml-1" 
                                onClick={() => {props.onDelete(place.id)}}                 
                                >
                                Delete
                            </button>
                        </div>
                </div>
            </div>
        )
    })

    return (
            <div className="card-body">
                {places}
                <button 
                    type="submit" 
                    className="btn btn-primary btn-lg btn-block"
                    onClick = {props.onClick}> 
                    Add next
                </button>
            </div>
    )
}

export default ReadyCard;