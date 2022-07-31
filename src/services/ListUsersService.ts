import { instanceToPlain } from "class-transformer"
import { UserRepositories } from "../repositories/UsersRepositories"

class ListUsersService {

  async execute (){
    const users = await UserRepositories.find()

    return instanceToPlain(users)

  }

}

export {ListUsersService}