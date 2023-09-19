import {
    add_favourite,
    get_favourites,
    remove_favourite,
  } from "../controllers/favourite.controllers";
  import { Router } from "express";
  
  import validateUser from "../middleware/auth";
  
  const router = Router();
  
  router.get("/getFavourites", validateUser, get_favourites);
  
  router.post("/addFavourite", validateUser, add_favourite);
  
  router.post("/removeFavourite/:favouriteId", validateUser, remove_favourite);
  
  export default router;