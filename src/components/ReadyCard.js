import React from 'react';
import moment from 'moment';

function ReadyCard(props) {
    const buttonStyle = {
        top: 0,
        right: 0,
    }

    const places = props.places.map((place,id) => {
        return (
            <div>
                {(id !== 0)? <hr></hr>: ''}
                <div key = {place.id} className = 'position-relative' >
                    <h4>{place.name} - <i>{place.positionOrDegree}</i></h4>

                        <p>From {moment(place.startDate).format('MMMM YYYY')} to {moment(place.endDate).format('MMMM YYYY')}.</p>

                        <p>{place.detail}</p>
                        <button 
                                    type="submit" 
                                    className="btn btn-primary position-absolute" 
                                    onClick={() => {props.onEdit(place.id)}}
                                    style = {buttonStyle}
                                >
                                Edit
                                </button>
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