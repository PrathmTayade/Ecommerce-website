import ProductCard from "@/components/ProductCard";
import React from "react";
// {
//   data: {
//     collection: {
//       id: 'gid://shopify/Collection/429493813270',
//       handle: 'women',
//       title: 'Women',
//       description: '',
//       image: [Object],
//       products: [Object]
//     }
//   }
// }
async function page({ params }) {
  const request = await fetch(
    `https://mock.shop/api?query={collection(handle:%22${params.collection}%22){id%20handle%20title%20description%20image%20{id%20url}%20products(first:%2020){edges%20{node%20{id%20title%20featuredImage%20{id%20url}}}}}}`
  );
  const response = await request.json();
  const collection = await response.data.collection;
  const products = await response.data.collection.products;
  // console.log(collection);
  // console.log(products);
  return (
    <div className=" flex  grid-flow-row grid-cols-fluid  flex-col justify-center bg-slate-50 gap-6 p-6 text-gray-900  dark:bg-slate-900 dark:text-slate-100  md:grid md:grid-cols-3    ">
      {products.edges.map((node, id) => (
        <ProductCard product={node.node} key={id} />
      ))}
    </div>
  );
}

export default page;
