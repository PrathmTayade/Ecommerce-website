"use client";
import {
  addItem,
  cartSelector
} from "@/reducers/cartSlice";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails({ data, id }) {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  const pathname = usePathname();
  const item = {
    id: id,
    title: data.product.title,
    image: data.product.images.edges[0].node.url,
    quantity: 1,
    price: data.product.variants.edges[0].node.price.amount * 50,
  };

  const addToCart = () => {
    dispatch(addItem(item));
    console.log("data", data);
    toast.success("Item added to cart");
  };

  return (
    <main className="flex min-h-max w-full    flex-col  pt-4 lg:flex-row">
      {/* Gallery */}
      {/* <img
        src="//cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1946"
        alt=""
        srcset="//cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=246 246w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=493 493w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=600 600w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=713 713w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=823 823w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=990 990w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1100 1100w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1206 1206w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1346 1346w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1426 1426w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1646 1646w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1946 1946w"
        sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw / 1 - 4rem)"
        width="1946"
        height="1946"
      ></img> */}
      {/* <div className="flex">
        {pathname
          .split("/")
          .slice(1)
          .map((segment) => {
            return (
              <div key={segment}>
                <span>
                  <span
                    key={segment}
                    className="animate-[highlight_1s_ease-in-out_1] rounded-full px-1.5 py-0.5  dark:text-zinc-100"
                  >
                    {segment}
                  </span>
                </span>

                <span className="text-zinc-600">/</span>
              </div>
            );
          })}
      </div> */}

      <section className="h-fit flex-1 flex-col gap-8 sm:mx-2 sm:flex sm:h-full sm:flex-row  sm:gap-4 md:mx-4 md:gap-8 lg:mx-0 lg:flex-col">
        <div className="relative flex items-center bg-orange-500 sm:bg-transparent ">
          <button
            className="absolute left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white pr-1 sm:hidden"
            id="previous-mobile"
          >
            <svg
              width={12}
              height={18}
              xmlns="http://www.w3.org/2000/svg"
              id="previous-mobile"
            >
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
                id="previous-mobile"
              />
            </svg>
          </button>

          <div className="pointer-events-none m-auto transition duration-300 sm:rounded-xl lg:pointer-events-auto lg:w-3/4 lg:cursor-pointer lg:hover:shadow-xl xl:w-[70%] xl:rounded-xl">
            <Image
              src={data.product.images.edges[0].node.url}
              alt="product"
              width={1946}
              height={1946}
              sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw / 1 - 4rem)"
              placeholder="empty"
              className="object-contain sm:rounded-xl"
            />
          </div>

          <button
            className="absolute right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white pl-1 sm:hidden"
            id="next-mobile"
          >
            <svg
              width={13}
              height={18}
              xmlns="http://www.w3.org/2000/svg"
              id="next-mobile"
            >
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth={3}
                fill="none"
                fillRule="evenodd"
                id="next-mobile"
              />
            </svg>
          </button>
        </div>
      </section>
      {/* Text */}
      <section className="w-full flex-1 p-6  lg:py-10 lg:pr-20 2xl:pr-40 ">
        <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-orange-500">
          Product Company
        </h4>
        <h1 className="text-very-dark mb-4 text-3xl font-bold lg:text-4xl">
          {data.product.title}
        </h1>
        <p className="text-dark-grayish mb-6 text-base sm:text-lg">
          {data.product.description}
        </p>
        <div className="mb-6 flex items-center justify-between sm:flex-col sm:items-start">
          <div className="flex items-center gap-4">
            <h3 className="text-very-dark inline-block text-3xl  font-bold">
              ₹ {data.product.variants.edges[0].node.price.amount * 25}
            </h3>
            <span className="bg-pale-orange-500 inline-block h-fit rounded-lg px-2 py-0.5 text-sm font-bold text-orange-500">
              50%
            </span>
          </div>
          <p className="text-dark-grayish decoration-dark-grayish my-auto w-fit line-through decoration-1">
            ₹ {data.product.variants.edges[0].node.price.amount * 50}
          </p>
        </div>
        <div className="mb-16 flex flex-col gap-5 sm:flex-row lg:mb-0">
          <button
            type="button"
            onClick={addToCart}
            className="flex h-12 w-full select-none  items-center justify-center gap-4 rounded-full bg-purple-600  py-2 font-bold  text-white shadow-md  transition hover:brightness-125"
          >
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 20"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="hsl(223, 64%, 98%)"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
