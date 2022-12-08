import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import "./category.styles.scss";
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  //   can be done like below , but the products map will be loaded everytime the component is rendered.
  //   const products = categoriesMap[category];
  // instead use hooks useState and useEffect.
  const [products, setProducts] = useState(categoriesMap[category]);

  // invoke useEffect whenever category (url path) or categoryMao is updated.
  useEffect(
    () => setProducts(categoriesMap[category]),
    [category, categoriesMap]
  );

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
