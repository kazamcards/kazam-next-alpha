"use server";

import { db } from "@/app/lib/db";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

const register = async (formData: FormData) => {
  const firstName = formData.get("firstname") as string;
  const lastName = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  if (!firstName || !lastName || !email || !password) {
    throw new Error("Please fill all fields!");
  }

  const existingUser = await db.query(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);
  console.log("Existing User:", existingUser, "End of");
  if (existingUser.rows.length > 0) throw new Error("User already exists");

  const hashedPassword = await hash(password, 12);

  await db.query(
    `INSERT INTO users ("firstName", "lastName", email, password, role) VALUES
  ($1, $2, $3, $4, $5)`,
    [firstName, lastName, email, hashedPassword, "User"]
  );

  console.log(`User created successfully`);
  redirect("/login");
};

export { register };
