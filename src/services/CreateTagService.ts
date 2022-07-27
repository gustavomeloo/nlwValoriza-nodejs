import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  async execute(name : string){

    if(!name){
      throw new Error("Incorrect Name");
    }

    const tagAlreadyExists = await TagsRepositories.findOne({
      where: {
        name
      }
    })

    if(tagAlreadyExists) {
      throw new Error("Tag Already Exists!");
    }

    const tag = TagsRepositories.create({
      name
    })

    await TagsRepositories.save(tag);
    
    return tag;
  }
}

export {CreateTagService}