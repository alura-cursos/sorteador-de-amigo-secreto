import { useParticipantsList } from "../state/hooks/useParticipantsList"

const Participants = () => {
  const participants:string[] = useParticipantsList()

  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  )
}

export default Participants