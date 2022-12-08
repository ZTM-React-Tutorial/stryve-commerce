import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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

    <div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;
