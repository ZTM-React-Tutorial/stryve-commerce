import { createContext, useState, useEffect, useReducer } from "react";
import {
  createUserFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

// does not have much significance.. If the provider is not available, this default value will be received by the subscriber..
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// // Functional component
// export const UserProvider = ({ children }) => {
//   // state for this component , which is the value that is received by the components that subscribe to it.
//   const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };
//   console.log("Log from UserProvider", currentUser);

//   // Run onlyt when the component mounts , hence [].
//   useEffect(() => {
//     const unSubscribe = onAuthStateChangedListener((user) => {
//       if (user) {
//         createUserFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     // return method called when unMounted
//     return unSubscribe;
//   }, []);

//   // pass value to its children..
//   // usaage <UserProvider><App/><UserProvider> --> value which is he state of this component is access to children
//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// createContext --> to create a context which contains the actual value to be stored in the context
// Eg - const UserContext = createContext({<default value>});

// Provider -> Wrapper/component class for the context

// Export const UserProvider = ({children}) => {

// const [currentUser, setCurrentUser] = useState(null);
// const value = { currentUser, setCurrentUser };
//    return <UserContext.Provider>{children}</UserContext.Provider>
// }

// Usage -->
// <UserProvider>
// <app>
// </UserProvider>

// Using Reducers - replaces useState.

const INITIAL_STATE = {
  currentUser: null,
};
const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// function invoked when a dispatch() is invoked.
// takes in previous state and an action object.
const userReducer = (state, action) => {
  // Action is a object with type and an optional payload
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`UnHandled type ${type} in userReducer`);
  }
};

// Functional component
export const UserProvider = ({ children }) => {
  // useReducer is a hook that takes in custom reducer function and the initial state.
  // it returns the initial state and a dispatch function that will inturn trigger the invocation of custom user reducer function
  // userReducer -> indicates invoke userReducer function when dispatch function is invoked.
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  // console.log(currentUser);
  const setCurrentUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  // all of the above to replase useState.. below remains the same.

  const value = { currentUser, setCurrentUser };

  // Run only when the component mounts , hence [].
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      // IMP:::: when auth changes , onAuthChanged listener invoks this call back which inturn setscurrentuser
      // resulting in the dispatch function to be invoked
      // causing the userReducer function defined within useReducer to be invoked , which inturn returns a new state , causing the components to be rerendered.
      setCurrentUser(user);
    });
    // return method called when unMounted
    return unSubscribe;
  }, []);

  // pass value to its children..
  // usaage <UserProvider><App/><UserProvider> --> value which is he state of this component is access to children
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
