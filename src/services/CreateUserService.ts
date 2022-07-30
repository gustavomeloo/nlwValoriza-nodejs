import { UserRepositories } from "../repositories/UsersRepositories";
import { hash } from 'bcryptjs'

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;

}

class CreateUserService {
 
  async execute({name, email, admin = false, password} : IUserRequest) {

    if(!email){
      throw new Error("Email Incorrect");
    }

    const userAlreadyExists = await UserRepositories.findOne({
      where: {
        email
      }
    });
    
    if(userAlreadyExists) {
      throw new Error("User Already Exists");
    }

    const passwordHash = await hash(password, 8)


    const user = UserRepositories.create({
      name, 
      email, 
      admin, 
      password: passwordHash
    });

    await UserRepositories.save(user);

    return user;
  }

}


export { CreateUserService}