import { checkemail, hashPass, saveData } from "../model/model.js";
import { registerSchema } from "../validation/validation.js";

export const registerdata = async (req, res) => {
  const { data, error } = registerSchema.safeParse(req.body);

  if (error) {
    //console.log(error.errors[0].message);
    req.flash("msg", error.errors[0].message);
    return res.redirect("/register");
  }

  const { name, email, designation, password } = data;

  // console.log(name, email, designation, password);

  const [checkedemail] = await checkemail(email);

  if (checkedemail) {
    req.flash("msg", "Email already exists");
    return res.redirect("/register");
  }

  const pass = await hashPass(password);

  const [user] = await saveData({ name, email, designation, pass });

  // console.log(user);

  req.flash("msg", "Registration successful");

  res.redirect("/");
};
