import { useRecoilValue, useSetRecoilState } from "recoil"
import { errorState, participantsList } from "../atom"


export const useAddParticipants = () => {
  const setList = useSetRecoilState(participantsList)
  const list = useRecoilValue(participantsList)
  const setError = useSetRecoilState(errorState)

  return (participantName: string) => {
    if(list.includes(participantName)){
      setError('Nomes duplicados não são permitidos!')
      
      setTimeout(() => {
        setError('')
      }, 3000);

      return
    }
    return setList(currentList => [...currentList, participantName])
  }
} 

