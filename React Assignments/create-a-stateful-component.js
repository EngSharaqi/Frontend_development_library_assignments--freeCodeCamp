// StatefulComponent should exist and render.

// StatefulComponent should render a div and an h1 element.

// The state of StatefulComponent should be initialized with a property name set to a string.

// The property name in the state of StatefulComponent should render in the h1 element.

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
      this.state = {
        name: "Mohamed Sharaqi"  
      }
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};