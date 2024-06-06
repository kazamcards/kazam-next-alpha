import { queryCategory } from "@/app/lib/CategoryProducts";
import { db } from "@/app/lib/db";
import ProductDisplay from "@/components/ProductDisplay";
import Link from "next/link";

import "../categories.css";

export default async function CategoryDynamicPage({ params }) {
  console.log("id is ", params.slug[0]);
  const catId = params.slug[0];
  console.log("route is ", params.slug[1]);

  const response = await db.query(`
  SELECT * FROM productscategory WHERE id = ${catId}`);
  const thisCategory = response.rows[0];
  return (
    <div className="dynamic-category-container flex flex-col p-2 gap-2">
      <Link href="/categories" className="back-to-all-link">
        Back to All Categories
      </Link>
      <h2>Here are our {thisCategory.category_name} products.</h2>
      <div className="category-product-container p-2">
        <ProductDisplay
          fetchProducts={async () => await queryCategory(catId)}
        />
      </div>
    </div>
  );
}
