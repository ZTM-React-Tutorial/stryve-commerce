// import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
// import ProductCard from "../../components/product-card/product-card.component";
// import { CategoriesContext } from "../../contexts-deprecated/categories.context";
import { useSelector } from "react-redux";
import {
  getCategoriesMap,
  isCategoriesLoading,
} from "../../store/categories/categories.selector";
import { Spinner } from "../spinner/spinner.component";

const CategoriesPreview = () => {
  // comment in lieu of Redux
  // const { categoriesMap } = useContext(CategoriesContext);

  // Redux selector.
  const categoriesMap = useSelector(getCategoriesMap);
  const isLoading = useSelector(isCategoriesLoading);

  // console.log("Categories Preview : ");

  return (
    // <> short form for <Fragment>
    // <>
    //   {Object.keys(categoriesMap).map((title) => (
    //     <>
    //       <h2>{title}</h2>
    //       <div className="products-container">
    //         {categoriesMap[title].slice(0, 4).map((product) => (
    //           <ProductCard key={product.id} product={product} />
    //         ))}
    //       </div>
    //     </>
    //   ))}
    // </>
    isLoading ? (
      <Spinner />
    ) : (
      <div>
        {Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })}
      </div>
    )
  );
};

export default CategoriesPreview;
