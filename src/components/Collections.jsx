"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Collections({ col }) {
  return (
    <div className=" m-auto cursor-pointer  border p-4 transition duration-300 dark:border-slate-500 sm:rounded-xl  lg:w-1/2 lg:cursor-pointer lg:hover:shadow-xl xl:w-[90%]  xl:rounded-xl ">
      <Link href={`/shop/collection/${col.node.handle}`} className=" relative ">
        <Image
          src={col.node.image.url}
          alt="collection"
          width={1024}
          height={1024}
          sizes="(min-width: 1200px) 715px, (min-width: 990px) calc(65.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw / 1 - 4rem)"
          placeholder="empty"
        />
        {/* <img src={col.node.image.url} alt="" /> */}
      </Link>

      <div className=" text-xl font-semibold uppercase  leading-tight text-slate-800  dark:text-white ">
        {col.node.title}
      </div>
    </div>
  );
}

export default Collections;
