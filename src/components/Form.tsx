import { useRef, useState } from "react"

import { useAddParticipant } from "../state/hooks/useAddParticipant"
import { useErrorMessage } from "../state/hooks/useErrorMessage"

const Form = () => {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  // custom hooks
  const addParticipantToList = useAddParticipant()
  const errorMessage = useErrorMessage()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setName('')
    inputRef.current?.focus()
    addParticipantToList(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insira os nomes dos participantes" 
      />
      <button 
        type="submit" 
        disabled={!name}
      >
        Adicionar
      </button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  )
}

export default Form