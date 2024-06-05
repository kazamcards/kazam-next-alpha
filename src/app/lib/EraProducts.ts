import { db } from "./db";
import { Product } from "../../components/types";

// Get all products by era:
export async function queryEra(eraId: number): Promise<Product[]> {
  const queryEra = `
    SELECT
    products.id, products.product_name, products.inventory, products.price, products.description, products.image_url,
    productscategory.category_name AS category,
    sets.set_name AS set,
    era.era_name AS era FROM products
  JOIN productscategory ON products.category_id = productscategory.id
  JOIN sets ON products.set_id = sets.id
  JOIN era ON sets.era_id = era.id
WHERE era.id = ${eraId}
    `;

  const response = await db.query(`${queryEra}`);
  return response.rows;
}
