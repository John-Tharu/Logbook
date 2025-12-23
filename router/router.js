import { Router } from "express";
import { addlog, homepage, index, register } from "../controller/controller.js";
import { registerdata } from "../controller/post.controller.js";

const router = Router();

router.route("/").get(index);

router.route("/register").get(register).post(registerdata);

router.get("/homepage", homepage);

router.get("/addlog", addlog);

export const routerdata = router;
