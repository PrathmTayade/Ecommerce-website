import React from "react";

export const getCollections = async () => {
  const request = await fetch(
    "https://mock.shop/api?query={collections(first:%2010){edges%20{node%20{id%20title%20image%20{altText%20url}}}}}"
  );
  const response = await request.json();
  console.log(response);
};
