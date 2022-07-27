import { AppDataSource } from "../database/data-source"
import { Tag } from "../entities/Tag"

const TagsRepositories = AppDataSource.getRepository(Tag)

export {TagsRepositories}