import React, {useState, useEffect} from 'react'; 
import ReadyCard from './GIReadyCard.js';
import Input from './Input.js'

import defaultPhoto from './defaultPhoto.js' 

const GeneralInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[bio, setBio] = useState('');                                  
    const[photo, setPhoto] = useState('');

    const [toEdit, setToEdit] = useState(true);

    const onSubmit = (e) => {
        e.preventDefault();
        setToEdit(!toEdit)
    }

    const handlePhoto = (e) => {
        if (e.target.value !== '') {
            setPhoto(e.target.value);
        } else {
            setPhoto(defaultPhoto);
        }

    }

    if (toEdit) {
        return (
            <div className='col mx-auto mt-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>General Information</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className='row'>
                                < Input 
                                    name='name' 
                                    nameValue = {name}
                                    labelName='Full name'
                                    onChange={(e) => {setName(e.target.value)}}
                                    type = 'text'
                                    required = {true}
                                />

                                < Input 
                                    name='phone' 
                                    nameValue = {phone}
                                    labelName='Phone number'
                                    onChange={(e) => {setPhone(e.target.value)}}
                                    type = 'phone'
                                    required = {true}
                                />
                                <div className="w-100"></div>

                                < Input 
                                    name='email' 
                                    nameValue = {email}
                                    labelName='E-mail'
                                    onChange={(e) => {setEmail(e.target.value)}}
                                    type = 'email'
                                    required = {true}
                                /> 

                                < Input 
                                    name='photo' 
                                    nameValue = {photo}
                                    labelName='Photo URL'
                                    onChange={handlePhoto}
                                    type = 'url'
                                    required = {false}
                                    optional = {true}
                                /> 

                            </div>
                            <div className='row'>
                                < Input 
                                    name='bio' 
                                    nameValue = {bio}
                                    labelName='Bio'
                                    onChange={(e) => {setBio(e.target.value)}}
                                    required = {false}
                                    optional = {true}
                                    type = 'textarea'
                                    maxLength ="200"
                                /> 
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <ReadyCard 
            photo={photo} 
            name={name} 
            phone = {phone} 
            email= {email} 
            bio={bio}
            onClick={onSubmit}/>
    )
}

export default GeneralInfo;