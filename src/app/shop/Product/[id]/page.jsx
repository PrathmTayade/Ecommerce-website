import getProductDetails from "@/lib/getProductDetails";
import ProductDetails from "@/components/ProductDetails";

async function Page({ params }) {
  const data = await getProductDetails(params.id);

  return (
    <main className=" dark:bg-slate-900 ">
      <ProductDetails data={data} id={params.id} />
    </main>
  );
}

export default Page;
