import React from "react";

async function getCollectionProducts(collection) {
  try {
    const request = await fetch(
      `https://mock.shop/api?query={collection(handle:%22${collection}%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}`
    );
    const response = await request.json();
    const products = await response.data.collection.products;
    return products;
  } catch (error) {
    let message = "couldnt fetch";
    throw new Error(message);
  }
}

export default getCollectionProducts;
