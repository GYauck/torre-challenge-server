import { Router } from "express";
const router = Router();

import users from "./user.routes";
import favourites from "./favourite.routes"

router.use("/users", users);
router.use("/favourites", favourites)

export default router;