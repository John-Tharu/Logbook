export const index = (req, res) => {
  res.render("index", { msg: req.flash("msg") });
};

export const homepage = (req, res) => {
  res.render("homepage");
};

export const addlog = (req, res) => {
  res.render("addlog");
};

export const register = (req, res) => {
  res.render("register", { msg: req.flash("msg") });
};
