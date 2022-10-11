import { useSetRecoilState } from "recoil"

import { resultSecredFriend } from "../atom"
import { makeDraw } from "../helpers/makeDraw"
import { useParticipantsList } from "./useParticipantsList"

export const useDraw = () => {
  const participants = useParticipantsList()
  const setResult = useSetRecoilState(resultSecredFriend)

  return () => {
    const result = makeDraw(participants)

    setResult(result)
  }
}