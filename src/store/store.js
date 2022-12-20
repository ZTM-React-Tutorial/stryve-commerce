import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import thunk from "redux-thunk";
// function within a function
//custom logger as the traditional logger groups logs
// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log(" type : ", action.type);
//   console.log(" payload : ", action.payload);
//   console.log(" currentState : ", store.getState());

//   next(action);

//   console.log(" nexState : ", store.getState());
// };

// middlewares are like AOPs that are invoked before an action is dispatched , current states , after reducers are run.
// logs before invoking reducer.
// const middlewares = [logger];

// blacklist --> indicates the states that should not be persited on browser.
const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"],
  // only store cart data.
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// if the node_env is development the logger is added to the miiddleware array else its an emptyu array.
// Add thunk MW --> allows asynchronous action.
// Thunk working --> if an action returns an async function , the thunk MW gets executed.. The async function takes a dispatch argument
// that can be further used in the async function to dispatch other actions
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

// logs captured using REDUX DEV TOOL extension. if extension not availble, default to redux compose.
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const composedEnhncers = compose(applyMiddleware(...middlewares));

const composedEnhncers = composeEnhancer(applyMiddleware(...middlewares));

// Creates a store with rootReducer .
// export const store = createStore(rootReducer, undefined, composedEnhncers);
export const store = createStore(persistedReducer, undefined, composedEnhncers);

export const persistor = persistStore(store);
