import { render, screen } from '@testing-library/react'

import {Formulario} from '../components/Formulario'

test('Then the input is empty, new participants shouldn\'t be added', () => {
  render(<Formulario/>)

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

  const button = screen.getByRole('button')

  expect(input).toBeInTheDocument()
  expect(button).toBeDisabled()
})
