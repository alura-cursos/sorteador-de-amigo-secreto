import { atom } from "recoil";

export const listOfParticipants = atom<string[]>({
  key: 'listOfParticipants',
  default: []
})
