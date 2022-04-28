// The App component should render to a string using ReactDOMServer.renderToString.

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

// Change code below this line4
ReactDOMServer.renderToString(<App />)