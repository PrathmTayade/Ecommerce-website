import Collections from "@/components/Collections";
import Image from "next/image";

// const fetchlog = {
//   data: {
//     collections: {
//       edges: [
//         {
//           node: {
//             id: "gid://shopify/Collection/429493780502",
//             title: "Men",
//             image: {
//               altText: null,
//               url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/cd_a_neatly_arranged_photo_of_mens_clothes_t-shirt_gray_hoodie__c5a4ebe4-ccb1-4d94-ae56-a1b33b4e71d9_1.png?v=1675456349",
//             },
//           },
//         },
//       ],
//     },
//   },
// };

export default async function Shop() {
  const request = await fetch(
    "https://mock.shop/api?query={collections(first:%2010){edges%20{node%20{id%20handle%20title%20image%20{altText%20url}}}}}"
  );
  const response = await request.json();
  const collections = await response.data.collections;
  return (
    <div className="container flex-1 w-screen scroll-smooth ">
      <div className=" flex  grid-flow-row grid-cols-fluid  flex-col justify-center bg-slate-50 gap-6 p-6 text-gray-900  dark:bg-slate-900 dark:text-slate-100  md:grid md:grid-cols-3    ">
        {collections.edges.map((col ,id) => (
          <div key={id}>

            <Collections col={col} />
          </div>
        ))}
      </div>
    </div>
  );
}
