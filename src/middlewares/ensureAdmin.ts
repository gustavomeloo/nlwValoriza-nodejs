import { NextFunction, Request, Response } from 'express'

export function ensureAdmin(request: Request, response: Response, next: NextFunction){

  return response.status(401).json({
    error: "Unauthorized",
  })
  
}