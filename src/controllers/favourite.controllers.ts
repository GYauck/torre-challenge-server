import { Request, Response } from "express";
import Favourite from "../models/Favourites";

export interface userRequest extends Request {
    user?: {
      id: any;
      name: string;
      lastname: string;
      email: string;
    };
  }


const get_favourites = async (req: userRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;

    const skip = (page - 1) * pageSize;

    const favourites = await Favourite.find({ user: userId })
      .skip(skip)
      .limit(pageSize);

    res.status(200).json(favourites);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error to obtain favourites from user" });
  }
};

const add_favourite = async (req: userRequest, res: Response) => {
  try {
    const userId = req.user.id;

    const { ggId, name, picture, professionalHeadline, username, verified } =
      req.body;
    console.log(name)
    const newFavourite = new Favourite({
      user: userId,
      ggId,
      name,
      picture,
      professionalHeadline,
      username,
      verified,
    });

    await newFavourite.save();

    res.status(201).json({
      message: "Success to add favourite",
      _id: newFavourite._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error to add favourite" });
  }
};

const remove_favourite = async (req: userRequest, res: Response) => {
  try {
    const userId = req.user.id;
    const favouriteId = req.params.favouriteId;

    const favourite: any = await Favourite.deleteOne({
      _id: favouriteId,
      user: userId,
    }).exec();

    if (!favourite) {
      return res.status(404).json({ error: "Favourite not found" });
    }

    res.status(200).json({ message: "Success to eliminate favourite" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error to eliminate favourite" });
  }
};

export { add_favourite, remove_favourite, get_favourites };