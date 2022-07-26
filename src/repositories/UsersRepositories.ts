import { AppDataSource } from "../database/data-source"
import { User } from "../entities/User"

const UserRepositories = AppDataSource.getRepository(User)

export {UserRepositories}


