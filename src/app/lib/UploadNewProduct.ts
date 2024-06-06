"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";

export async function UploadNewProduct(formData: any) {
  const productName = formData.get("product_name");
  const description = formData.get("description");
  const price = formData.get("price");
  const category = formData.get("category");
  const era = formData.get("era");
  const set = formData.get("set");
  const inventory = formData.get("inventory");
  const imageUrl = formData.get("imageUrl");

  console.log(
    "Product submitted:",
    productName,
    price,
    category,
    era,
    set,
    inventory,
    imageUrl
  );

  await db.query(
    `
    INSERT INTO products
    (product_name, set_id, category_id, inventory, price, description, image_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [productName, set, category, inventory, price, description, imageUrl]
  );

  revalidatePath("/");
}
