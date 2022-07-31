import { TagsRepositories } from "../repositories/TagsRepositories"

class ListTagsService {

  async execute(){
    const tags = await TagsRepositories.find()

    return tags
  }

}

export { ListTagsService }