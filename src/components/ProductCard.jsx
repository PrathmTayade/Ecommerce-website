import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const newProd = product.id.substring(product.id.indexOf("/Product/"));

  const item = {
    id: product.id,
    title: product.title,
    image: product.featuredImage.url,
    quantity: 1,
    price: product.variants.edges[0].node.price.amount * 50,
  };

  const price = product.variants.edges[0].node.price.amount * 50;
  return (
    <div className="m-2 flex justify-center  ">
      <div className="block max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <Link href={`/shop/${newProd}`}>
          <div className="w-full">
            <Image
              src={product.featuredImage.url}
              alt="product image"
              height={1024}
              width={1024}
              placeholder="empty"
              className="object-cover"
              sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw / 1 - 4rem)"
            />
            {/* <img src={product.featuredImage.url} alt="product img" /> */}
          </div>
        </Link>
        <div className="bg p-6">
          <div className="mb-2 text-xl font-medium leading-tight text-gray-800 dark:text-slate-50">
            {product.title}
          </div>
          <div className="flex justify-between">
            {/* Price of the product */}
            <div className="text-lg">&#8377; {price}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
