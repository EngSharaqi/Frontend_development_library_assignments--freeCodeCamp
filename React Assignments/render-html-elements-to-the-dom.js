// There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.

// The constant JSX should return a div element.

// The div should contain an h1 tag as the first element.

// The div should contain a p tag as the second element.

// The provided JSX element should render to the DOM node with id challenge-node.

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

ReactDOM.render(JSX, document.getElementById('challenge-node'));