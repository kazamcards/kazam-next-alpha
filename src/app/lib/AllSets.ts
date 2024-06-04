import { db } from "./db";

// Get all of the Categories and their names:
export async function allSets() {
  const querySets = `
    SELECT * FROM sets
    `;

  const response = await db.query(`${querySets}`);
  return response.rows;
}
