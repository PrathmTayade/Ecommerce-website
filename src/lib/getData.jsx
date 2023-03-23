export const getData = async () => {
  // const req = await fetch("https://fakestoreapi.com/products");
  // const response = await req.json();

  const request = await fetch(
    "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}"
  );
  const response = await request.json();
  const product = await response.data.products.edges;

  return product;
};
