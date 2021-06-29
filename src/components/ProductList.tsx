import Product from "./Product";
function ProductList({ products }:{products: any}) {
  return (
    <div data-testid="ProductList" className="ProductList">
      {products?.map((product: any) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export { ProductList };
export default ProductList;
 