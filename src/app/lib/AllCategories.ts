import { db } from "./db";
import { Product } from "../../components/types";

export const queryCategories = `
    SELECT * FROM productscategory
    `;

export async function allCategories() {
  const response = await db.query(`${queryCategories}`);
  return response.rows;
}
