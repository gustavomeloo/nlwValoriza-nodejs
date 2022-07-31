import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSendComplimentsService {
  async execute(user_id : string){
    const compliments = await ComplimentsRepositories.find({
      where : {
        user_sender : user_id
      }
    })

    return compliments
  }
}

export { ListUserSendComplimentsService }