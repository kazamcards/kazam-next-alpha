import { db } from "./db";

// Get all of the Eras and their names:
export async function allEras() {
  const queryEras = `
    SELECT * FROM era
    `;

  const response = await db.query(`${queryEras}`);
  return response.rows;
}
