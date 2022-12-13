import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { setCategories } from "../../store/categories/categories.action";
const Shop = () => {
  // react hook for redux that gives an handle to the dispatch function that inturn dispatches an action.
  const dispatch = useDispatch();
  useEffect(() => {
    // load categories to Redux context
    // any async call withing use effect needs to be wrapped within an inner function.
    const getCategoriesMap = async () => {
      var categories = await getCategoriesAndDocuments();
      console.log("Loaded categories from Database", categories);
      dispatch(setCategories(categories));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
