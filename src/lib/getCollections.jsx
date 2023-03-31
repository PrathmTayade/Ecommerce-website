export default async function getCollections() {
  try {
    const request = await fetch(
      "https://mock.shop/api?query={collections(first:%2010){edges%20{node%20{id%20handle%20title%20image%20{altText%20url}}}}}"
    );
    const response = await request.json();
    const collections = await response.data.collections;
    return collections;
  } catch (error) {
    throw new Error("couldn't get collections")
    
  }
}
