import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Form from './Form'
import { RecoilRoot } from 'recoil'

/* 
  The AAA pattern
  Arrange, Act, Assert

  arrumamos o cenário (por exemplo, renderizar um componente, buscamos componentes)
  agimos (realizamos clicks, definimos valores)
  afirmamos o que queremos (onde realizamos as expectativas)})
*/

test('when the input is empty, cannot add a participant', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  )

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const button  = screen.getByRole('button')

  expect(input).toBeInTheDocument()
  expect(button).toBeDisabled()
})

test('add a participant if name input is filled', () => {
  render(
    <RecoilRoot>
      <Form />
    </RecoilRoot>
  )

  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const button  = screen.getByRole('button')

  fireEvent.change(input, {
    target: {
      value: 'Ana Catarina'
    }
  })
  fireEvent.click(button)

  expect(input).toHaveFocus()
  expect(input).toHaveValue('')
})