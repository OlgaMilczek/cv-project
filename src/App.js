import React, {Component} from 'react';
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'

class App extends Component {
  constructor() {
    super()
    this.state = {
      generalInfo: false,
      education: false,
      experience: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

    handleChange = (props) => {
      this.setState(prevState  => {
          return {
            [props]: !prevState.props
          }
        });
  }

  render () {
    return (
      <div className='container'>
          <GeneralInfo onSubmit={this.handleChange}/>
          <Education onSubmit={this.handleChange}/>
          <Experience onSubmit={this.handleChange}/>
      </div>
    );
  }
}

export default App;
