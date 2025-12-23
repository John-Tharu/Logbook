import z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, { message: "Name must be at least 3 characters long" })
      .max(20, { message: "Name must be at most 20 characters long" }),
    email: z.string().trim().email({ message: "Invalid email address" }),
    designation: z.string().trim().min(1, { message: "Designation required" }),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, { message: "Password must be at most 20 characters long" }),
    cpassword: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, { message: "Password must be at most 20 characters long" }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Password not matched",
    path: ["cpassword"],
  });
