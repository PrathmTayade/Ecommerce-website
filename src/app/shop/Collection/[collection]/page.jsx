import ProductCard from "@/components/ProductCard";
import getCollectionProducts from "@/lib/getCollectionProducts";
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
  let products = await getCollectionProducts(params.collection);
  return (
    <div className=" flex  grid-flow-row grid-cols-fluid  flex-col justify-center bg-slate-50 gap-6 p-6 text-gray-900  dark:bg-slate-900 dark:text-slate-100  md:grid md:grid-cols-3    ">
      {products.edges.map((node, id) => (
        <ProductCard product={node.node} key={id} />
      ))}
    </div>
  );
}

export default page;
