function Loading() {
  return (
    <div className="container w-screen flex-1  ">
      <div className=" flex  grid-flow-row grid-cols-fluid  flex-col justify-center gap-6 bg-slate-50 p-6 text-gray-900  dark:bg-slate-900   md:grid md:grid-cols-3    ">
        {[...Array(10).keys()].map((i) => (
          <div key={i} className="inline-block">
            <div className=" md:mi-h-[calc((100vw - 11.5rem) / 2)] m-auto min-h-[calc(100vw/1-4rem)] animate-pulse border bg-slate-200 p-4 dark:border-slate-500   sm:rounded-xl md:min-h-[60vh]  lg:w-1/2 xl:w-[90%]  xl:rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
