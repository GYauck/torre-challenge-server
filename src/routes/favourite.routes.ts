import {
    add_favourite,
    get_favourites,
    remove_favourite,
  } from "../controllers/favourite.controllers";
  import { Router } from "express";
  
  import validateUser from "../middleware/auth";
  
  const router = Router();
  
  router.get("/getFavorites", validateUser, get_favourites);
  
  router.post("/addFavorite", validateUser, add_favourite);
  
  router.post("/removeFavorite/:favoriteId", validateUser, remove_favourite);
  
  export default router;