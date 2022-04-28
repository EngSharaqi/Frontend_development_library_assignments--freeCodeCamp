// The styles variable should be an object with three properties.

// The styles variable should have a color property set to a value of purple.

// The styles variable should have a fontSize property set to a value of 40.

// The styles variable should have a border property set to a value of 2px solid purple.

// The component should render a div element.

// The div element should have its styles defined by the styles object.


var styles = {
  color: 'purple',
  fontSize: '40',
  border: '2px solid purple'
}
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};