import { createContext, useEffect, useState } from "react";
// import SHOP_DATA from "../shop-data.js";
import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);

  // useEffect(() => {
  //   console.log(SHOP_DATA);
  //   setProducts(SHOP_DATA);
  // }, []);

  // load categoriesMap on component mount.
  useEffect(() => {
    // any async call withing use effect needs to be wrapped within an inner function.
    const getCategoriesMap = async () => {
      var categoriesMap = await getCategoriesAndDocuments();
      // console.log("Loaded categories from Database");
      setCategoriesMap(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  // use effect to add categories.. one time job to populate the firebase database.
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  return (
    <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
