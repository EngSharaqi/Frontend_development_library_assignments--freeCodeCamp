// The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.

// The CampSite component should render.

// The Camper component should render.

// The Camper component should include default props which assign the string CamperBot to the key name.

// The Camper component should include prop types which require the name prop to be of type string.

// The Camper component should contain a p element with only the text from the name prop.

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name = "CamperBot" />
      </div>
    );
  }
};
// Change code below this line
const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};