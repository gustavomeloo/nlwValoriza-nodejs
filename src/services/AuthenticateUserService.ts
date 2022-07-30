import { UserRepositories } from "../repositories/UsersRepositories";

import { compare } from 'bcryptjs'

import { sign } from 'jsonwebtoken'

interface IAuthenticateRequest {
  email : string;
  password : string;
}

class AuthenticateUserService {
  async execute({email, password}: IAuthenticateRequest) {

    const user = await UserRepositories.findOne({
      where : {
        email
      }
    })

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    const token = sign({
      email : user.email
    }, "fba0c363fb347d4859c5ea379ee46569", {
      subject : user.id,
      expiresIn : "1d"
    })

    return token;

  }
}

export { AuthenticateUserService }