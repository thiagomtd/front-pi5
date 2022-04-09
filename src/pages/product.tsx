import { useRouter } from "next/router";
import ProductPage from "../templates/Product";

export default function Product() {
  const router = useRouter();

  console.log(router);
  return <ProductPage />;
}
