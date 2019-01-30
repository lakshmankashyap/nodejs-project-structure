import * as jsonwebtoken from "jsonwebtoken";
import { authConfig } from "../config"
import { Request, Response, NextFunction } from 'express';
import { IUserViewModel } from "../../../../shared/viewModels";

export interface RequestModel<Params> extends Request {
  user: IUserViewModel;
  params: Params;
}
export interface RequestPost<BodyType> extends Request {
  body: BodyType;
}

export const AuthMiddleware = (req: RequestModel<{}>, res: Response, next: NextFunction) => {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jsonwebtoken.verify(token, authConfig.publicKEY, function (err, decoded) {
    if (err) {
      return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    // if everything good, save to request for use in other routes
    req.user = decoded;
    next();
  });
}