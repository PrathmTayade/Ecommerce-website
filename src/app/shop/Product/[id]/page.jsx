import getProduct from "@/lib/getProduct";
import Image from "next/image";

async function Page({ params }) {
  const request = await fetch(
    `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${params.id}%22){title%20description%20images(first:%201){edges%20{node%20{url}}}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}`
  );

  const response = await request.json();
  const data = await response.data;

  // await console.log(params);

  return (
    <main className="w-full pt-4  flex flex-col lg:flex-row">
      {/* Gallery */}
      {/* <img
        src="//cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1946"
        alt=""
        srcset="//cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=246 246w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=493 493w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=600 600w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=713 713w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=823 823w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=990 990w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1100 1100w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1206 1206w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1346 1346w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1426 1426w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1646 1646w, //cdn.shopify.com/s/files/1/0688/1755/1382/products/Whiteleathersneakers01.jpg?v=1675447604&amp;width=1946 1946w"
        sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw / 1 - 4rem)"
        width="1946"
        height="1946"
      ></img> */}

      <section className="h-fit flex-col flex-1 gap-8 sm:flex sm:flex-row sm:gap-4 sm:h-full  sm:mx-2 md:gap-8 md:mx-4 lg:flex-col lg:mx-0">
        <div className="relative flex items-center bg-orange-500 sm:bg-transparent ">
          <button
            className="bg-white w-10 h-10 flex items-center justify-center pr-1 rounded-full absolute left-6 z-10 sm:hidden"
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

          <Image
            src={data.product.images.edges[0].node.url}
            alt="product"
            width={1946}
            height={1946}
            sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw / 1 - 4rem)"
            placeholder="empty"
            className="object-cover  sm:rounded-xl xl:w-[70%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-3/4 lg:pointer-events-auto lg:cursor-pointer lg:hover:shadow-xl"
          />
          <button
            className="bg-white w-10 h-10 flex items-center justify-center pl-1 rounded-full absolute right-6 z-10 sm:hidden"
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
      <section className="w-full flex-1 p-6  lg:pr-20 lg:py-10 2xl:pr-40 ">
        <h4 className="font-bold text-orange-500 mb-2 uppercase text-xs tracking-widest">
          Product Company
        </h4>
        <h1 className="text-very-dark mb-4 font-bold text-3xl lg:text-4xl">
          {data.product.title}
        </h1>
        <p className="text-dark-grayish mb-6 text-base sm:text-lg">
          {data.product.description}
        </p>
        <div className="flex items-center justify-between mb-6 sm:flex-col sm:items-start">
          <div className="flex items-center gap-4">
            <h3 className="text-very-dark font-bold text-3xl  inline-block">
              ₹ {data.product.variants.edges[0].node.price.amount * 25}
            </h3>
            <span className="inline-block h-fit py-0.5 px-2 font-bold bg-pale-orange-500 text-orange-500 rounded-lg text-sm">
              50%
            </span>
          </div>
          <p className="text-dark-grayish w-fit line-through decoration-dark-grayish decoration-1 my-auto">
            ₹ {data.product.variants.edges[0].node.price.amount * 50}
          </p>
        </div>
        <div className="flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0">
          <div className="w-full h-10 text-sm border shadow-sm  px-3  flex items-center justify-between rounded-lg font-bold relatives sm:w-80">
            <div id="minus" className="">
              <svg
                width={12}
                height={4}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                    id="a"
                  />
                </defs>
                <use fill="#FF7E1B" fillRule="nonzero" xlinkHref="#a" />
              </svg>
            </div>
            <span id="amount" className="select-none">
              0
            </span>
            <div id="plus" className=" ">
              <svg
                width={12}
                height={12}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="plus"
              >
                <defs>
                  <path
                    d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                    id="b"
                  />
                </defs>
                <use
                  fill="#FF7E1B"
                  fillRule="nonzero"
                  xlinkHref="#b"
                  id="plus"
                />
              </svg>
            </div>
          </div>
          <button
            className="w-full h-10 bg-orange-500 text-white py-2 flex items-center justify-center gap-4 text-xs rounded-lg font-bold text-light shadow-md shadow-orange-500 hover:brightness-125 transition select-none"
            
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

export default Page;
