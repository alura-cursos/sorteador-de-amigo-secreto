import { useRef, useState } from "react"

import { useAddParticipant } from "../state/hooks/useAddParticipant"

const Form = () => {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const addParticipantToList = useAddParticipant()

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
    </form>
  )
}

export default Form