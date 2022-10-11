import { atom } from "recoil";

export const listOfParticipants = atom<string[]>({
  key: 'listOfParticipants',
  default: []
})

export const resultSecredFriend = atom<Map<string, string>>({
  key: 'resultSecretFriend',
  default: new Map()
})

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})