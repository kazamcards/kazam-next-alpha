import { db } from "./db";
import { Product } from "../../components/types";

export const queryEras = `
    SELECT * FROM era
    `;

export async function allEras() {
  const response = await db.query(`${queryEras}`);
  return response.rows;
}
