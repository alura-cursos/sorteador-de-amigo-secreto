import { useParticipantsList } from "../state/hooks/useParticipantsList"

const Draw = () => {
  const participants = useParticipantsList()

  return (
    <section>
      <form>
        <select name="participantTurn" id="participantTurn">
          {participants.map(participant => (
            <option key={participant} value={participant}>{participant}</option>
          ))}
        </select>
      </form>
    </section>
  )
}

export default Draw