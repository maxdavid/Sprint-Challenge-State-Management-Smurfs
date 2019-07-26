1. What problem does the context API help solve?

React's Context API solves the problems of complex state management between multiple components in a large application. Prop drilling is a classic practice that occurs in React apps without a robust state management solution, where the same props are passed down through several layers of the component hierarchy.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions` are signals our app sends to the store, which usually trigger a reducer. The `reducer` takes in the current state and the action, and returns a modified copy of the state.

The `store` is the control center of Redux; it keeps track of the state, receives the actions, and triggers reducers.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the set of data that is accessible to all components, and is good for storing information that they may all need to access (usernames, etc). Component state is more specific information that a single component will need to keep track of.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middleware for the action -> reducer flow that allows us to return functions from reducers, allowing for asynchronous actions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Hooks & Context! They are dead-simple to write and understand with minimal overhead to worry about.
