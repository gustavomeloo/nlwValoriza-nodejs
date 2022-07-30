import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id : string;
  user_sender : string;
  user_receiver : string;
  message : string;
}

class CreateComplimentService{
  async execute({tag_id, user_sender, user_receiver, message} : IComplimentRequest) {

    if(user_sender == user_receiver) {
      throw new Error("Incorrect User Receiver")
    }

    const userReceiverExists = await UserRepositories.findOne({
      where : {
        id : user_receiver
      }
    })

    if(!userReceiverExists) {
      throw new Error("User Receiver does not exists!")
    }

    const compliment = ComplimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await ComplimentsRepositories.save(compliment);

    return compliment;

  }
}

export { CreateComplimentService }