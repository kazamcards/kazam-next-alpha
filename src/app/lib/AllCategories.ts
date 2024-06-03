import { db } from "./db";
import { Product } from "../../components/types";

// Get recently added products limited by last 10
// export const queryCategories = `
//     SELECT
//     products.id, products.product_name, products.inventory, products.price, products.description, products.image_url,
//     productscategory.category_name AS category,
//     sets.set_name AS set,
//     era.era_name AS era FROM products
//   JOIN productscategory ON products.category_id = productscategory.id
//   JOIN sets ON products.set_id = sets.id
//   JOIN era ON sets.era_id = era.id
//   ORDER BY products.id DESC
//   LIMIT 10
//     `;

export const queryCategories = `
    SELECT * FROM productscategory
    `;

export async function allCategories() {
  const response = await db.query(`${queryCategories}`);
  return response.rows;
}
