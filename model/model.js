import { eq } from "drizzle-orm";
import { db } from "../config/db.js";
import { registerSchema } from "../drizzle/schema.js";
import argon2 from "argon2";

export const checkemail = async (email) => {
  return await db
    .select()
    .from(registerSchema)
    .where(eq(registerSchema.email, email));
};

export const hashPass = async (password) => {
  return await argon2.hash(password);
};

export const saveData = async ({ name, email, designation, pass }) => {
  return await db
    .insert(registerSchema)
    .values({ name, email, designation, pass })
    .$returningId();
};
