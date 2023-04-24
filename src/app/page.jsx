import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-slate-50  pt-24  pb-[110px] text-gray-900 dark:bg-slate-900  dark:text-slate-100 ">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center  px-5">
          <div className="w-full px-4 py-20  lg:w-5/12">
            <div className="flex flex-col justify-center gap-5    ">
              <h1 className="text-dark mb-3 text-4xl font-bold leading-snug text-purple-500 sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                Shopcart Website
                <br />
                <span className="text-orange-500 underline">
                  {" "}
                  Mega Sale 50 % off
                </span>
              </h1>
              <p className="text-body-color mb-8 max-w-[480px] text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                repellendus autem ducimus alias aliquam! Est voluptatem soluta
                ad maiores! Sequi?
              </p>
              <ul className="flex flex-wrap items-center gap-8">
                <li>
                  <Link
                    href={"/cart"}
                    className="inline-flex items-center justify-center rounded-lg bg-black py-4 px-6 text-center text-xl font-medium text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    Go to Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/shop"}
                    className="inline-flex items-center justify-center rounded-lg bg-green-500  py-4 px-6 text-center  text-xl font-medium text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className=" hidden px-4 lg:block lg:w-1/12" /> */}
          <div className="hidden w-full px-4  lg:block lg:w-6/12  ">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10  pt-11 pr-14   lg:pt-0">
                <div className="relative ">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0688/1755/1382/collections/banner-2.png?v=1675462488"
                    alt="hero"
                    height={1024}
                    width={1024}
                    placeholder="empty"
                    className=" rounded-xl  object-contain "
                  />
                </div>

                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width={93}
                    height={93}
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
