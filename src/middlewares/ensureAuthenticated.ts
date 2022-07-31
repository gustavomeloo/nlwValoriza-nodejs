import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub : string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

  const authToken = request.headers.authorization

  if(!authToken) {
    response.status(401).end();
  }

  const [,token] = authToken.split(" ")

  try {
    const { sub } = verify(token, "fba0c363fb347d4859c5ea379ee46569") as IPayload;

    request.user_id = sub;

    return next();

  } catch (err) {
    response.status(401).end();
  }

}
