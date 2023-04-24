export default async function getCollections() {
  try {
    const request = await fetch(
      "https://mock.shop/api?query={collections(first:%2010){edges%20{node%20{id%20handle%20title%20image%20{altText%20url}}}}}"
    );


    //DEAly to check out loading animations 

    // const request = await delayFetch(
    //   "https://mock.shop/api?query={collections(first:%2010){edges%20{node%20{id%20handle%20title%20image%20{altText%20url}}}}}",
    //   { delay: 5000 }
    // );

    const response = await request.json();
    const collections = await response.data.collections;
    return collections;
  } catch (error) {
    throw new Error("couldn't get collections");
  }
}

const delayFetch = (url, options) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetch(url, { cache: "no-store" }));
    }, options.delay);
  });
