import { USER_ACTION_TYPES } from "./user-action-types";

const INITIAL_STATE = {
  currentUser: null,
};

// incase of redux store there is only reducer (rootReducer) , user reducer is added to the rootReducer.
// As we cannot use useReducer hook to pass in initial state, we pass in as a default value on INITIAL_STATE.
export const userReducer = (state = INITIAL_STATE, action) => {
  // Action is a object with type and an optional payload
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // return a new stateobject so, the corresponding components are rerendered.
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // incase of redux, the default value is the existing state..
      // as this is not a new object, the components are not rerendered.
      return state;
  }
};
