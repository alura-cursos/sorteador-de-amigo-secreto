import { useSetRecoilState } from "recoil"
import { listOfParticipants } from "../atom"

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listOfParticipants)

  return (participantName: string) => {
    return setList(currentList => [
      ...currentList,
      participantName
    ])
  }
}