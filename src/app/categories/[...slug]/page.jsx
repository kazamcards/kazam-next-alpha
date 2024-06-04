import { queryCategory } from "@/app/lib/CategoryProducts";
import { db } from "@/app/lib/db";
import ProductDisplay from "@/components/ProductDisplay";

export default async function CategoryDynamicPage({ params }) {
  console.log("id is ", params.slug[0]);
  const catId = params.slug[0];
  console.log("route is ", params.slug[1]);

  const response = await db.query(`
  SELECT * FROM productscategory WHERE id = ${catId}`);
  const thisCategory = response.rows[0];
  console.log(thisCategory);
  return (
    <>
      <h1>Welcome to the Categories dynamic page</h1>
      <h2>
        You&apos;re on {thisCategory.category_name}. Here are the products from
        that category:
      </h2>
      <ProductDisplay fetchProducts={async () => await queryCategory(catId)} />
    </>
  );
}
