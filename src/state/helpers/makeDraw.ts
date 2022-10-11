import shuffle from "just-shuffle"

export const makeDraw = (participants: string[]) => {
  const total = participants.length
  const shuffledList = shuffle(participants)

  const result = new Map<string, string>()

  for (let index = 0; index < total; index++) {
    const secretIndex = index === (total - 1) ? 0 : index + 1

    result.set(shuffledList[index], shuffledList[secretIndex])
  }

  return result
}