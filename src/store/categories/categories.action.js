import { CATEGORIES_ACTION_TYPES } from "./categories.action.types";
export const setCategories = (categories) => {
  return {
    type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    payload: categories,
  };
};
