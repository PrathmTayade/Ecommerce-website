import React from "react";

const loading = () => {
  return (
    <div className=" flex  grid-flow-row  grid-cols-fluid  flex-col justify-center gap-6 bg-slate-50 p-6 text-gray-900  dark:bg-slate-900 dark:text-slate-100  md:grid md:grid-cols-3    ">
      {[...Array(10).keys()].map((i) => (
        <div key={i} className="m-2  ">
          <div
            style={{
              animationDelay: `${i * 0.05}`,
              animationDuration: "1s",
            }}
            className="min-h-[60vh] mx-auto max-w-sm animate-pulse  rounded-md  bg-slate-200  sm:min-h-[50vh]  md:min-w-full lg:min-h-[70vh] xl:min-h-[80vh]"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default loading;
