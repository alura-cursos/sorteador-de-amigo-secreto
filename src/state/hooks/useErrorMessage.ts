import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const useErrorMessage = () => {
  const message = useRecoilValue(errorState)

  return message
}