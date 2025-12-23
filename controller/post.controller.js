import { registerSchema } from "../validation/validation.js";

export const registerdata = (req, res) => {
  const { data, error } = registerSchema.safeParse(req.body);

  if (error) {
    console.log(error.errors[0].message);
    // req.flash("errors", error.errors[0].message);
    return res.redirect("/register");
  }

  const { name, email, designation, password } = data;

  console.log(name, email, designation, password);

  res.redirect("/register");
};
