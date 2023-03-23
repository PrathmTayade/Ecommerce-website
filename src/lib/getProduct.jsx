export default async function getProduct(params) {
  const request = await fetch(
    `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${params.id}%22){title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}`
  );

  const response = await request.json();
  
  return response.data;
  // const request = await fetch(
  //   `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/%22){id%20title%20description%20featuredImage%20{id%20url}}}`
  // );
}
