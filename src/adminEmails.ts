import { db } from "@/app/lib/db";

export async function adminEmails() {
  const queryAdmins = `
    SELECT * FROM admins
    `;

  const response = await db.query(`${queryAdmins}`);
  const emails = response.rows.map((admin: { email: string }) => admin.email);
  return emails;
}
