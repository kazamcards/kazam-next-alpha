// --- --- Product Page --- ---
// --- Component Imports:
import ProductDisplay from "@/components/ProductDisplay";
import Footer from "@/components/footer";
import { db } from "../../lib/db";
import { Product } from "../../../components/types";
import { individualProduct } from "@/app/lib/IndividualProduct";

interface Params {
  id: number;
}

export default function ProductPage({ params }: { params: Params }) {
  console.log(params.id);

  return (
    <>
      <main>
        <div className="individual-product border border-black  h-auto ">
          {/* <h1>{Product.product_name}</h1> */}
          <div className="individual-product-container flex flex-row justify-center gap-2 pl-2 pb-4">
            <ProductDisplay
              fetchProducts={async () => await individualProduct(params.id)}
            />
          </div>
        </div>
      </main>
    </>
  );
}
