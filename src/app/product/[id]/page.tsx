// --- --- Product Page --- ---
// --- Component Imports:
import IndividualProductDisplay from "@/components/IndividualProductDisplay";
import Footer from "@/components/footer";
import { db } from "../../lib/db";
import { Product } from "../../../components/types";
import { individualProduct } from "@/app/lib/IndividualProduct";
import TestPack from "../../../../public/images/test-pack.webp";
import Image from "next/image";

interface Params {
  id: number;
}

export default async function ProductPage({ params }: { params: Params }) {
  return (
    <>
      <div className="individual-product h-auto bg-[var(--secondary-uranian-blue)]">
        {/* <h1>{Product.product_name}</h1> */}
        <div className="individual-product-container flex flex-row justify-center p-2">
          <IndividualProductDisplay
            fetchProducts={async () => await individualProduct(params.id)}
          />
        </div>
      </div>
    </>
  );
}
