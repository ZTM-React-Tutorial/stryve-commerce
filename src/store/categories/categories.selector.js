// the below selector always returns a new object resulting in the component that this  selector is registered with is re-rendered..

// export const getCategoriesMap = (state) => {
//   console.log(" Selector Fired");
//   return state.categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
// };

//  To over comne this issue we will be using memoization using reselect api.

import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

// createSelector performs memoization
// selectCategoriesReducer is cacahed and only if its changed then is the function invoked.
// categoriesReducer is equal to selectCategoriesReducer
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesReducer) => categoriesReducer.categories
);

export const getCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
