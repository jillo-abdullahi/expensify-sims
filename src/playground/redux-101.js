import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});
const store =  createStore((state = { count : 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: state.count = 0
            };
        default:
            return state;

    }
});

// Watch for changes on the store in order to be able to re-render components
// Use store.subscribe
// assign subscribe to a variable to unsubscribe

// const unsubscribe = store.subscribe(() => {
//     // Return the current state object
//     console.log(store.getState());
// });

store.subscribe(() => {
    // Return the current state object
    console.log(store.getState());
});


// use Actions to change the redux store
// Action - An object that gets sent to the store
// Actions have a type e.g. increment, decrement, reset etc

// use dispatch to send an action to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch({
    type: 'RESET'
});

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

