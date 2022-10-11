import { makeDraw } from "./makeDraw"

describe('given a secret friend giveaway', () => {
  test('each participant does not draw their own name', () => {
    const participants = [
      'Ana', 
      'Catarina', 
      'Juliana', 
      'Samuel',
      'Sabrina', 
    ]

    const draw = makeDraw(participants)

    participants.forEach(participant => {
      const secretFriend = draw.get(participant)
      expect(secretFriend).not.toEqual(participant)
    })
  })
})