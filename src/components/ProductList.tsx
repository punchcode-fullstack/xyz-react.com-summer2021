import { useEffect, useState } from "react";

import type { Product as ProductType } from "./Product.types";
import Product from "./Product";
import Api from "../api";
import "./ProductList.scss";

function ProductList() {
  const [products, setProducts] = useState<ProductType[] | never[]>([]);
  useEffect(() => {
    async function load() {
      try{
        const data = await Api.getProducts();
        setProducts(data);
      }catch(e){
        setProducts([])
      }
    }
    load();
  }, []);
  return (
    <div data-testid="ProductList" className="ProductList">
      {products?.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export { ProductList };
export default ProductList;
