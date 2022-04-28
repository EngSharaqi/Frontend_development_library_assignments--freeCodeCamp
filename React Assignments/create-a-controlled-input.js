// ControlledInput should return a div element which contains an input and a p tag.

// The state of ControlledInput should initialize with an input property set to an empty string.

// Typing in the input element should update the state and the value of the input, and the p element should render this state as you type.

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line

    // Change code above this line
  }
  // Change code below this line
handleChange = (event) =>{
  this.setState({
    input: event.target.value
  })
}
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
<input onChange = {this.handleChange} id='input' type='text' value = {this.state.input}/>
        { /* Change code above this line */}
        
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};