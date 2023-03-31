export default async function getProductDetails(id) {
  try {
    const request = await fetch(
      `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${id}%22){title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}`
    );

    const response = await request.json();
    const data = await response.data;
    return data;
  } catch (error) {
    throw new Error("couldn't get product details");
  }
}
