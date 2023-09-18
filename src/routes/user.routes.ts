import { Router } from "express";
import {
  register,
  login,
  logout,
  validation,
} from "../controllers/user.controllers";

import validateUser from "../middleware/auth";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", validateUser, validation);


export default router;