import { Request, Response } from "express";
import { generateToken } from "../config/tokens";
import User from "../models/User";

import {
  create_user,
  login_user,
} from "../services/user.services";

import { handleHttp } from "../utils/error.handle";

interface userRequest extends Request {
    user?: {
      id: any;
      name: string;
      lastname: string;
      email: string;
    };
  }

const register = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const response = await create_user(user);
    res.status(201).send(response);
  } catch (e) {
    handleHttp(res, "ERROR USER REGISTER");
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.sendStatus(401);
    }

    const isValid = await user.validatePassword(password);

    if (!isValid) {
      return res.sendStatus(401);
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastname: user.lastname,
    };

    const token = generateToken(payload);

    res.status(201).json({
      error: false,
      message: "login successfully",
      user: { ...payload, token },
    });
  } catch (e) {
    handleHttp(res, "ERROR USER REGISTER");
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.status(204).send({});
  } catch (err) {
    handleHttp(res, "ERROR LOGOUT USER");
  }
};

const validation = async (req: userRequest, res: Response) => {
  try {
    res.send(req.user);
  } catch (e) {
    handleHttp(res, "ERROR USER VALIDATION");
  }
};

export {
  register,
  login,
  logout,
  validation,
};