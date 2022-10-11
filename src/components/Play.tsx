import { useNavigate } from "react-router-dom"
import { useParticipantsList } from "../state/hooks/useParticipantsList"

const Play = () => {
  const participants = useParticipantsList()
  const navigateTo = useNavigate()

  const startGame = () => {
    navigateTo('/sorteio')
  }

  return (
    <>
      <button 
        disabled={participants.length < 3}
        onClick={startGame}
      >
        Iniciar Brincadeira
      </button>
    </>
  )
}

export default Play