
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const newProd = product.id.substring(product.id.indexOf("/Product/") );
  return (
    <div className="flex justify-center m-2 ">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
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
        <div className="p-6">
          <div className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {product.title}
          </div>
          <div>
            
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
