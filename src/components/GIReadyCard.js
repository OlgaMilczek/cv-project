import React from 'react';

function ReadyCard(props) {
    const imageStyle = {
        width: 300,
        hight: 300,
    }

    const buttonStyle = {
        top: 20,
        right: 20,
    }

    return (
        <div className='col mx-auto mt-5'>
        <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={props.photo} className="card-img" alt="portfolio picture" style={imageStyle}/>
                    </div>
                    
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{props.name}</h3>
                            <h5 className="card-text">Phone number: {props.phone}</h5>
                            <h5 className="card-text">E-mail: {props.email}</h5>
                            <p>{props.bio}</p>
                            <button 
                                type="submit" 
                                className="btn btn-primary position-absolute" 
                                onClick={props.onClick}
                                style = {buttonStyle}
                            >
                            Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadyCard;