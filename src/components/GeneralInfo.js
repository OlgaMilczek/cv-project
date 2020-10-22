import React, {Component} from 'react'; 
import ReadyCard from './GIReadyCard.js';
import Input from './Input.js'

import defaultPhoto from './defaultPhoto.js' 

class GeneralInfo extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '', 
            phone: '',
            photo: defaultPhoto, 
            bio: '',
            toEdit: true,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
    }

    handleChange = (e) => {
        const toChange = e.target.id
        this.setState({
            [toChange]: e.target.value,
          });
    }
      
    handlePhoto = (e) => {
        if (e.target.value !== '') {
            this.setState({
                photo: e.target.value,
              });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit('generalInfo');
        this.setState (prevState => { 
            return {
                toEdit: !prevState.toEdit,
                }
        })
    }
    
    render() {
        if (this.state.toEdit) {
            return (
                <div className='col mx-auto mt-5'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>General Information</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className='row'>
                                    < Input 
                                        name='name' 
                                        nameValue = {this.state.name}
                                        labelName='Full name'
                                        onChange={this.handleChange}
                                        type = 'text'
                                        required = {true}
                                    />

                                    < Input 
                                        name='phone' 
                                        nameValue = {this.state.phone}
                                        labelName='Phone number'
                                        onChange={this.handleChange}
                                        type = 'phone'
                                        required = {true}
                                    />
                                    <div className="w-100"></div>

                                    < Input 
                                        name='email' 
                                        nameValue = {this.state.email}
                                        labelName='E-mail'
                                        onChange={this.handleChange}
                                        type = 'email'
                                        required = {true}
                                    /> 

                                    < Input 
                                        name='photo' 
                                        nameValue = {this.state.photo}
                                        labelName='Photo URL'
                                        onChange={this.handlePhoto}
                                        type = 'url'
                                        required = {false}
                                        optional = {true}
                                    /> 

                                </div>
                                <div className='row'>
                                    < Input 
                                        name='bio' 
                                        nameValue = {this.state.bio}
                                        labelName='Bio'
                                        onChange={this.handleChange}
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
                photo={this.state.photo} 
                name={this.state.name} 
                phone = {this.state.phone} 
                email= {this.state.email} 
                bio={this.state.bio}
                onClick={this.onSubmit}/>
        )
    }
}

export default GeneralInfo;