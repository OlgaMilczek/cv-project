import React, {Component} from 'react'; 
import Input from './Input.js'; 
import ReadyCard from './ReadyCard.js'


class Education extends Component {
    constructor() {
        super();

        this.state = {
            schools: [],
            school: {
                name: '',
                positionOrDegree: '', 
                startDate: '', 
                endDate: '',
                details: '',
                id: 0,
            },
            toEdit: true, 
            schoolsAdded: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    handleChange = (e) => {
        const toChange = e.target.id;
        this.setState(prevState => {
            return {
                school: {
                    ...prevState.school,
                    [toChange]: e.target.value
                }
            }
          });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit('education');
        this.setState (prevState => { 
            for (let i = 0; i < prevState.schools.length; i ++) {
                if (prevState.schools[i].id === prevState.school.id) {
                    const newSchools = prevState.schools.map(school => {
                        if (school.id === prevState.school.id) {
                            return prevState.school
                        } else {
                            return school
                        }
                    })
                    return {
                        schools: newSchools,
                        school: {
                            name: '',
                            positionOrDegree: '', 
                            startDate: '', 
                            endDate: '',
                            details: '', 
                            id: prevState.schoolsAdded,
                        },
                        toEdit: !prevState.toEdit,
                        schoolsAdded: prevState.schoolsAdded,
                    }
                }
            }
            return {
                schools: this.state.schools.concat(this.state.school),
                school: {
                    name: '',
                    positionOrDegree: '', 
                    startDate: '', 
                    endDate: '',
                    details: '', 
                    id: prevState.schoolsAdded + 1,
                },
                toEdit: !prevState.toEdit,
                schoolsAdded: prevState.schoolsAdded + 1,

            }
        })
    }

    onEdit = (id) => {
        this.setState (prevState => {
            const editedSchool = prevState.schools.filter(school => {
                return (school.id === id)
            })[0];
            return  {
                ...prevState,
                school: {
                    name: editedSchool.name,
                    positionOrDegree: editedSchool.positionOrDegree, 
                    startDate: editedSchool.startDate, 
                    endDate: editedSchool.endDate,
                    details: editedSchool.details, 
                    id: editedSchool.id,
                },
                toEdit: !prevState.toEdit
            }
        })
    }

    onClick = () => {
        this.setState(prevState => {
            return {
                toEdit: !prevState.toEdit    
            }
        })
    }

    onDelete = (id) => {
        this.setState(prevState => {
            const newSchools = prevState.schools.filter(school => {
                return (school.id !== id)
            })
            if (prevState.schools.length === 1) {
                return {
                    ...prevState,
                    schools: newSchools,
                    toEdit: !prevState.toEdit
                }
            }
            return {
                ...prevState,
                schools: newSchools
            }
        })
    }

    render() {
        let content
        let cancelButton = <button type="submit" className="btn btn-secondary btn-lg btn-block" onClick = {this.onClick} >
                            Cancel
                            </button>
        if (this.state.toEdit) {
            content = <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className='row'>
                                < Input 
                                    name='name' 
                                    nameValue = {this.state.school.name}
                                    labelName='School name'
                                    onChange={this.handleChange}
                                    type = 'text'
                                    required = {true}
                                />

                                < Input 
                                    name='positionOrDegree' 
                                    nameValue = {this.state.school.positionOrDegree}
                                    labelName='Filed of study'
                                    onChange={this.handleChange}
                                    type = 'text'
                                    required = {true}
                                />

                                <div className="w-100"></div>

                                < Input 
                                    name='startDate' 
                                    nameValue = {this.state.school.startDate}
                                    labelName='Start date'
                                    onChange={this.handleChange}
                                    type = 'date'
                                    required = {true}
                                /> 

                                < Input 
                                    name='endDate' 
                                    nameValue = {this.state.school.endDate}
                                    labelName='End date'
                                    onChange={this.handleChange}
                                    type = 'date'
                                    required = {true}
                                /> 
                            </div>
                            <div className='row'>

                                < Input 
                                    name='details' 
                                    nameValue = {this.state.school.details}
                                    labelName='Additional information'
                                    onChange={this.handleChange}
                                    required = {false}
                                    optional = {true}
                                    type = 'textarea'
                                    maxLength ="400"
                                /> 
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">
                                    Submit
                                </button>
                                {(this.state.schools.length > 0) ? cancelButton : null}
                            </div>
                        </form>
                    </div>
        } else {
            content = <div>
                <ReadyCard places = {this.state.schools} onClick = {this.onClick} onEdit = {this.onEdit} onDelete = {this.onDelete }/>
            </div>
        }
        return (
            <div className='col mx-auto mt-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Education</h3>
                    </div>
                    {content}
                </div>
            </div>
        )
    }
}
    
export default Education;