import { USER_ACTION_TYPES } from "./user-action-types";
// User action generating function... This function generates an action whihc is passed to the
//  dispatch function of the rootReducer definef within app.js which would inturn invoke reducer resulting in state updater and hence causing the components to rerender.
export const setCurrentUser = (user) => {
  return { type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user };
};
