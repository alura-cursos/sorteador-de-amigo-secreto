import { useRecoilValue } from "recoil"
import { listOfParticipants } from "../atom"

export const useParticipantsList = () => {
  return useRecoilValue(listOfParticipants)
}