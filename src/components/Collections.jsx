import Link from "next/link";
import React from "react";

function Collections({ col }) {
  return (
    <div className="p-4 border   sm:rounded-xl xl:w-[90%] xl:rounded-xl m-auto pointer-events-none transition duration-300 lg:w-1/2 lg:pointer-events-auto lg:cursor-pointer lg:hover:shadow-xl  dark:border-slate-500 ">
      <Link href={`/shop/Collection/${col.node.handle}`}>
        <div>
          {/* <Image
            src={node.node.image.url}
            alt="collection"
            width={500}
            height={500}
          /> */}
          <img src={col.node.image.url} alt="" />
        </div>
      </Link>

      <div className=" font-semibold text-slate-800 dark:text-white  text-xl leading-tight  uppercase ">
        {col.node.title}
      </div>
    </div>
  );
}

export default Collections;
