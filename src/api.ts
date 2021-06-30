import products from "./data/products.json";

function getProducts() {
  return products;
}
const api = { getProducts };

export { getProducts };
export default api;
