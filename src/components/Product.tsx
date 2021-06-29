function Product({id, name, price, thumbnail}) {
  return <div data-testid="Product" className="Product">
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
  </div>;
}

export { Product };
export default Product;
