import { CATEGORIES_ACTION_TYPES } from "./categories.action.types";

const INITIAL_STATE = {
  categories: [],
  // added for thunk
  isLoading: false,
  error: {},
};

// export const CategoriesReducer = (state = INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return {
//         ...state,
//         categories: payload,
//       };
//     default:
//       return state;
//   }
// };

export const CategoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    // if categories fetch is successful set the categories to payload from thunk action.
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
