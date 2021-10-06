/**
 * *Reducer is a funciton which takes the current state of the store and return the updated store
 * ?How does reducer know what has to be updated?
 * *For that we have another argument known as action
 * !Action => Events, Reducer => Event Handler
 * ?Store object has a dispatch method which takes action which will then foward this action to dispatcher
 * !We do not call the reducer, store calls it so we work with the store
 * *Reducer will complete the new state and return this to store, the store will set this state internally notifis the UI components
 * *about the state, this components will then pull-out the updated data and refresh themself
 * !Steps for building Redux
 * * Design the store
 * * Define the actions
 * * Create one/more reducer
 * * Set up the store
 * ?Inside action type is the only property that redux expects in your action, if we missed it than redux will complain about it
 * Type can be of any data type but usually string is prefered
 * * EG :
 * * {
 * * type : "ADD_BUG",
 * * description : "..."
 * * }
 *
 */
import store from "./store";
import * as actions from "./actionType";
store.subscribe(() => {
  console.log("Store changed!", store.getState());
});
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
