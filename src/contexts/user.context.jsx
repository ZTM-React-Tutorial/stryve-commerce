import { createContext, useState, useEffect } from "react";
import {
  createUserFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

// does not have much significance.. If the provider is not available, this default value will be received by the subscriber..
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Functional component
export const UserProvider = ({ children }) => {
  // state for this component , which is the value that is received by the components that subscribe to it.
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  console.log("Log from UserProvider", currentUser);

  // Run onlyt when the component mounts , hence [].
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      setCurrentUser(user);
    });
    // return method called when unMounted
    return unSubscribe;
  }, []);

  // pass value to its children..
  // usaage <UserProvider><App/><UserProvider> --> value which is he state of this component is access to children
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

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
