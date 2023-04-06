import getProductDetails from "@/lib/getProductDetails";
import ProductDetails from "@/components/ProductDetails";

async function Page({ params }) {
  const data = await getProductDetails(params.id);

  return <ProductDetails data={data} id={params.id} />;
}

export default Page;
