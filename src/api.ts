async function getProducts() {
  try{
    const response = await fetch("/products");
    return response.json();
  }catch(e){
    return []
  }
}

const api = { getProducts };

export { getProducts };
export default api;
