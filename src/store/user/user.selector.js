// selctor function to retrieve current user from redux state.. (reduxState.<reducerName>.<fieldName>)
export const selectCurrentUser = (state) => {
  return state.user.currentUser;
};
