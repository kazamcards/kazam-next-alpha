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
  const result = await db.query(
    `SELECT * FROM products WHERE id = ${params.id}`
  );

  const product = result.rows[0];
  console.log(product.product_name);
  console.log(product.era_name);
  return (
    <>
      <main>
        <div className="individual-product border border-black  h-auto ">
          {/* <h1>{Product.product_name}</h1> */}
          <div className="individual-product-container flex flex-row justify-center gap-2 pl-2 pb-4">
            <IndividualProductDisplay
              fetchProducts={async () => await individualProduct(params.id)}
            />
          </div>
        </div>
      </main>
    </>
  );
}
