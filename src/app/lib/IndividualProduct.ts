import { db } from "./db";
import { Product } from "../../components/types";

interface Params {
  id: string;
}

//Export the function for use elsewhere i.e. the products page
export async function individualProduct(id: number): Promise<Product[]> {
  //Get individual product information from interface
  console.log(id);
  const queryIndividual = `
SELECT products.id, products.product_name, products.inventory, products.price, products.description, products.image_url,
  productscategory.category_name AS category,
  sets.set_name AS set,
  era.era_name AS era 
FROM products
JOIN productscategory ON products.category_id = productscategory.id
JOIN sets ON products.set_id = sets.id
JOIN era ON sets.era_id = era.id
WHERE products.id = ${id}
`;
  const response = await db.query(queryIndividual);
  return response.rows;
}
