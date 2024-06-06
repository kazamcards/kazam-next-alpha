import { queryEra } from "@/app/lib/EraProducts";
import { db } from "@/app/lib/db";
import ProductDisplay from "@/components/ProductDisplay";

export default async function EraDynamicPage({ params }) {
  console.log("id is ", params.slug[0]);
  const eraId = params.slug[0];
  console.log("route is ", params.slug[1]);

  const response = await db.query(`
  SELECT * FROM era WHERE id = ${eraId}`);
  const thisEra = response.rows[0];
  console.log(thisEra);
  return (
    <>
      <h1>Welcome to the Era dynamic page</h1>
      <h2>
        You&apos;re on {thisEra.era_name}. Here are the products from that
        category:
      </h2>
      <div className="category-grid">
        <ProductDisplay fetchProducts={async () => await queryEra(eraId)} />
      </div>
    </>
  );
}
