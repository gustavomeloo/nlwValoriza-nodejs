import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;

}

class CreateUserService {
 
  async execute({name, email, admin} : IUserRequest) {

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


    const user = UserRepositories.create({
      name, email, admin
    });

    await UserRepositories.save(user);

    return user;
  }

}


export { CreateUserService}