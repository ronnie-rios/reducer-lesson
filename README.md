# Context and Reducers in React

## What is a reducer?
The `useReducer()` hook helps you separate rendering and state manangment. This hook extracts the state manangement out of the component.

## Example

### How does a reducer work?
`useReducer()` is a hook that accepts two arguments, the first is a ***reducer function*** and the second is the ***initial state***. It returns an array of a dispatch function and the current state.

### Reducers in this application
`const [state, dispatch] = useReducer(renderFunction, initialState);`
- the `renderFunction` is the reducer function that is imported from a seaparte file. 