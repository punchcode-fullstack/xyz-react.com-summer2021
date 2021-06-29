import Product from "./Product";

function ProductList({ products }) {
  return (
    <div data-testid="ProductList" className="ProductList">
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export { ProductList };
export default ProductList;
