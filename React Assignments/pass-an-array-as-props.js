// The ToDo component should return a single outer div.

// The third child of the ToDo component should be an instance of the List component.

// The fifth child of the ToDo component should be an instance of the List component.

// Both instances of the List component should have a property called tasks and tasks should be of type array.

// The first List component representing the tasks for today should have 2 or more items.

// The second List component representing the tasks for tomorrow should have 3 or more items.

// The List component should render the value from the tasks prop in the p tag.

const List = (props) => {
  { /* Change code below this line */ }
  return <p>{ props.tasks.join(", ") }</p>
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks ={["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks ={[1, 2, 3]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};