import { db } from "./db";
import { Product } from "../../components/types";

// Get recently added products limited by last 10:
export async function recentlyAdded(): Promise<Product[]> {
  const queryRecent = `
    SELECT
    products.id, products.product_name, products.inventory, products.price, products.description, products.image_url,
    productscategory.category_name AS category,
    sets.set_name AS set,
    era.era_name AS era FROM products
  JOIN productscategory ON products.category_id = productscategory.id
  JOIN sets ON products.set_id = sets.id
  JOIN era ON sets.era_id = era.id
  ORDER BY products.id DESC
  LIMIT 10
    `;
  const response = await db.query(`${queryRecent}`);
  return response.rows;
}
