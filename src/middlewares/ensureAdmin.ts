import { NextFunction, Request, Response } from 'express'
import { UserRepositories } from '../repositories/UsersRepositories'

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

  const { user_id } = request

  const {admin} = await UserRepositories.findOne({
    where : {
      id : user_id
    }
  })

  if(admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  })
  
}