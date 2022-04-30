// Calling the function loginAction should return an object with type property set to the string LOGIN.

// The store should be initialized with an object with property login set to false.

// The store.dispatch() method should be used to dispatch an action of type LOGIN.

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

store.dispatch(loginAction());
store.dispatch({type: 'LOGIN', login: 'false'});