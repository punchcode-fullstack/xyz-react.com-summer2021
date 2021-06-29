function Product({id, name, price, thumbnail}) {
  return <div data-testid="Product" className="Product">
      <div>{id}</div>
      <div>{name}</div>
      <div>{price}</div>
      <button>Add to Cart</button>
  </div>;
}

export { Product };
export default Product;
