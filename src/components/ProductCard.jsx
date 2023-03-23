"use client";

import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const newProd = product.id.substring(product.id.indexOf("/Product/") + 1);
  return (
    <div className="flex justify-center m-2 ">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <Link href={`/shop/${newProd}`}>
          {/* <Image
            src={product.featuredImage.url}
            alt="product image"
            height={500}
            width={500}
          /> */}
          <img src={product.featuredImage.url} alt="product img" />
        </Link>
        <div className="p-6">
          <div className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {product.title}
          </div>

          <button
            type="button"
            className="inline-block rounded bg-orange-500  px-6 pt-2.5 pb-2 text-xs font-bold uppercase leading-normal  focus:outline-none focus:ring-0 active:bg-primary-700 "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
