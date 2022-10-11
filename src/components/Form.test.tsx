import React from 'react'
import { render, screen } from '@testing-library/react'

import Form from './Form'

/* 
  The AAA pattern
  Arrange, Act, Assert

  arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
  agimos (realizamos clicks, definimos valores)
  afirmamos o que queremos (onde realizamos as expectativas)})
*/

test('when the input is empty, cannot add a participant', () => {
  render(<Form />)

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const button  = screen.getByRole('button')

  expect(input).toBeInTheDocument()
  expect(button).toBeDisabled()
})