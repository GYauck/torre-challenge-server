import mongoose, { Schema, Document } from "mongoose";

export interface FavouriteAttributes extends Document {
    user: any;
    ggId: string;
    name: string;
    picture: string;
    professionalHeadline: string;
    verified: boolean;
  }

const favouriteSchema = new Schema<FavouriteAttributes>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  ggId: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  picture: {
    type: String,
    required: false,
  },
  professionalHeadline: {
    type: String,
    required: false,
  },
  verified: {
    type: Boolean,
    required: false,
  },
});

const Favourite = mongoose.model<FavouriteAttributes>("Favourite", favouriteSchema);

export default Favourite;  