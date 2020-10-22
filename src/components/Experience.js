import React, {Component} from 'react'; 
import Input from './Input.js'; 
import ReadyCard from './ReadyCard.js'


class Experience extends Component {
    constructor() {
        super();

        this.state = {
            works: [],
            work: {
                name: '',
                positionOrDegree: '', 
                startDate: '', 
                endDate: '',
                details: '',
                id: 0,
            },
            toEdit: true, 
            workAdded: 0,
        }
        this.handleChange = this.handleChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    handleChange = (e) => {
        const toChange = e.target.id;
        this.setState(prevState => {
            return {
                work: {
                    ...prevState.work,
                    [toChange]: e.target.value
                }
            }
          });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit('work');
        this.setState (prevState => { 
            for (let i = 0; i < prevState.works.length; i ++) {
                if (prevState.works[i].id === prevState.work.id) {
                    const newWorks = prevState.works.map(work => {
                        if (work.id === prevState.work.id) {
                            return prevState.work
                        } else {
                            return work
                        }
                    })
                    return {
                        works: newWorks,
                        work: {
                            name: '',
                            positionOrDegree: '', 
                            startDate: '', 
                            endDate: '',
                            details: '', 
                            id: prevState.worksAdded,
                        },
                        toEdit: !prevState.toEdit,
                        worksAdded: prevState.worksAdded,
                    }
                }
            }
            return {
                works: this.state.works.concat(this.state.work),
                work: {
                    name: '',
                    positionOrDegree: '', 
                    startDate: '', 
                    endDate: '',
                    details: '', 
                    id: prevState.worksAdded + 1,
                },
                toEdit: !prevState.toEdit,
                worksAdded: prevState.worksAdded + 1,

            }
        })
    }

    onEdit = (id) => {
        this.setState (prevState => {
            const editedWork = prevState.works.filter(work => {
                return (work.id === id)
            })[0];
            return  {
                ...prevState,
                work: {
                    name: editedWork.name,
                    positionOrDegree: editedWork.positionOrDegree, 
                    startDate: editedWork.startDate, 
                    endDate: editedWork.endDate,
                    details: editedWork.details, 
                    id: editedWork.id,
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

    render() {
        let content
        if (this.state.toEdit) {
            content = <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className='row'>
                                < Input 
                                    name='name' 
                                    nameValue = {this.state.work.name}
                                    labelName='Company name'
                                    onChange={this.handleChange}
                                    type = 'text'
                                    required = {true}
                                />

                                < Input 
                                    name='positionOrDegree' 
                                    nameValue = {this.state.work.positionOrDegree}
                                    labelName='Position'
                                    onChange={this.handleChange}
                                    type = 'text'
                                    required = {true}
                                />

                                <div className="w-100"></div>

                                < Input 
                                    name='startDate' 
                                    nameValue = {this.state.work.startDate}
                                    labelName='Start date'
                                    onChange={this.handleChange}
                                    type = 'date'
                                    required = {true}
                                /> 

                                < Input 
                                    name='endDate' 
                                    nameValue = {this.state.work.endDate}
                                    labelName='End date'
                                    onChange={this.handleChange}
                                    type = 'date'
                                    required = {true}
                                /> 
                            </div>
                            <div className='row'>

                                < Input 
                                    name='details' 
                                    nameValue = {this.state.work.details}
                                    labelName='Details'
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
                            </div>
                        </form>
                    </div>
        } else {
            content = <div>
                <ReadyCard places = {this.state.works} onClick = {this.onClick} onEdit = {this.onEdit}/>
            </div>
        }
        return (
            <div className='col mx-auto my-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Work Experience</h3>
                    </div>
                    {content}
                </div>
            </div>
        )
    }
}
    
export default Experience;