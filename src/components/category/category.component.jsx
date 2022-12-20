import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
// import { CategoriesContext } from "../../contexts-deprecated/categories.context";
import { useSelector } from "react-redux";
import {
  getCategoriesMap,
  isCategoriesLoading,
} from "../../store/categories/categories.selector";
import { Spinner } from "../spinner/spinner.component";

import "./category.styles.scss";
const Category = () => {
  const { category } = useParams();
  // const { categoriesMap } = useContext(CategoriesContext);

  const categoriesMap = useSelector(getCategoriesMap);
  const isLoading = useSelector(isCategoriesLoading);

  //   can be done like below , but the products map will be loaded everytime the component is rendered.
  //   const products = categoriesMap[category];
  // instead use hooks useState and useEffect.
  const [products, setProducts] = useState(categoriesMap[category]);

  // invoke useEffect whenever category (url path) or categoryMao is updated.
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
