import { atom } from "recoil";

export const listOfParticipants = atom<string[]>({
  key: 'listOfParticipants',
  default: []
})

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})