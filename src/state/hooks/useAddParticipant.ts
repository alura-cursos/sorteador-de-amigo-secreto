import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, listOfParticipants } from "../atom"

export const useAddParticipant = () => {
  const setList = useSetRecoilState(listOfParticipants)
  const list = useRecoilValue(listOfParticipants)
  const setError = useSetRecoilState(errorState)

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError('Nomes duplicados não são permitidos')
      return 
    }

    return setList(currentList => [
      ...currentList,
      participantName
    ])
  }
}