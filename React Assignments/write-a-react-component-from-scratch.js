// There should be a React component called MyComponent.

// MyComponent should contain an h1 tag with text My First React Component! Case and punctuation matter.

// MyComponent should render to the DOM.

// MyComponent should have a constructor calling super with props.


// Change code below this line
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
   return (
    <h1>My First React Component!</h1>
  );}
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));