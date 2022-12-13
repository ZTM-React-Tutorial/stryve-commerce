import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// function within a function
//custom logger as the traditional logger groups logs
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log(" type : ", action.type);
  console.log(" payload : ", action.payload);
  console.log(" currentState : ", store.getState());

  next(action);

  console.log(" nexState : ", store.getState());
};

// middlewares are like AOPs that are invoked before an action is dispatched , current states , after reducers are run.
// logs before invoking reducer.
// const middlewares = [logger];

const middlewares = [loggerMiddleware];
const composedEnhncers = compose(applyMiddleware(...middlewares));

// Creates a store with rootReducer .
export const store = createStore(rootReducer, undefined, composedEnhncers);
