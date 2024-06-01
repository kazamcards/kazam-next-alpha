import { db } from "../app/lib/db";
import TestPack from "../../public/images/test-pack.webp";
import Image from "next/image";

// this component could be reusable across the site, and will change what it displays depending on the Props it receives:

export default async function ProductDisplay() {
  // Get All products. ALL!
  const response = await db.query(`
  SELECT
  products.id, products.product_name, products.inventory, products.price, products.description, products.image_url,
  productscategory.category_name AS category,
  sets.set_name AS set, 
  era.era_name AS era FROM products
JOIN productscategory ON products.category_id = productscategory.id
JOIN sets ON products.set_id = sets.id
JOIN era ON sets.era_id = era.id
  `);

  const productData = response.rows;
  console.log(productData);
  return (
    <>
      {productData.map((product) => {
        return (
          <div
            className="product-card flex flex-col items-center border pt-1 rounded-xl"
            key={product.id}
          >
            <Image src={TestPack} alt={"tast image"} height={150} />
            <div className="product-text flex flex-col gap-2 justify-start w-full border-t border-b mt-1 mb-1">
              {" "}
              <p>{product.era}</p>
              <p>{product.set}</p>
              <p>{product.product_name}</p>
            </div>

            <p>{product.inventory} in stock</p>
            <p>£{product.price}</p>
            <p className="bg-[var(--tertiary-coral-orange)]  text-center">
              ADD TO BASKET BUTTON
            </p>
          </div>
        );
      })}
    </>
  );
}
