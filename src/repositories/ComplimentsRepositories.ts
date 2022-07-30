import { AppDataSource } from "../database/data-source"
import { Compliment } from "../entities/Compliment"

const ComplimentsRepositories = AppDataSource.getRepository(Compliment)

export {ComplimentsRepositories}