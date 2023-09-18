import { NextFunction, Response, Request } from "express";
import { validateToken } from "../config/tokens";

interface userRequest extends Request {
    user?: {
      id: any;
      name: string;
      lastname: string;
      email: string;
    };
  }

const validateUser = (req: userRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token) {
    const payload = validateToken(token);

    req.user = payload;

    if (payload) return next();

    res.sendStatus(401);
  }
};

export default validateUser;