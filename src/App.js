import {Component} from 'react'
import './App.css'

class App extends Component {
  state = {
    saveButton: false,
    userInput: '',
  }

  getUserInput = event => {
    this.setState({
      userInput: event.target.value,
    })
  }

  editButton = () => {
    this.setState(prevState => ({
      saveButton: !prevState.saveButton,
    }))
  }

  render() {
    const {saveButton, userInput} = this.state
    console.log(userInput)
    return (
      <div className="bg-container">
        <div className="input-container">
          <h1 className="heading"> Editable Text Input</h1>
          <div className="sub-container">
            {saveButton === true ? (
              <div className="duplicatecontainer">
                <p>{userInput}</p>
              </div>
            ) : (
              <input
                type="text"
                className="inputelement"
                onChange={this.getUserInput}
              />
            )}
            <button className="savebutton" onClick={this.editButton}>
              {saveButton === true ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default App
