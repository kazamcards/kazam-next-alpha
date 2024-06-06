import { queryEra } from "@/app/lib/EraProducts";
import { db } from "@/app/lib/db";
import ProductDisplay from "@/components/ProductDisplay";
import Link from "next/link";
import "../eras.css";

export default async function EraDynamicPage({ params }) {
  console.log("id is ", params.slug[0]);
  const eraId = params.slug[0];
  console.log("route is ", params.slug[1]);

  const response = await db.query(`
  SELECT * FROM era WHERE id = ${eraId}`);
  const thisEra = response.rows[0];
  console.log(thisEra);
  return (
    <div className="dynamic-category-container flex flex-col p-2 gap-2">
      <Link href="/eras" className="back-to-all-link">
        Back to All Eras
      </Link>
      <h2>Here are our {thisEra.era_name} products.</h2>
      <div className="category-product-container p-2">
        <ProductDisplay fetchProducts={async () => await queryEra(eraId)} />
      </div>
    </div>
  );
}
