import { db } from "./db";

// Get all of the Categories and their names:
export async function allCategories() {
  const queryCategories = `
    SELECT * FROM productscategory
    `;

  const response = await db.query(`${queryCategories}`);
  return response.rows;
}
