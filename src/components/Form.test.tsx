import React from 'react'
import { render, screen } from '@testing-library/react'

import Form from './Form'

// Jest
test('when the input is empty, cannot add a participant', () => {
  render(<Form />)

  // get the DOM input
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  // get the Button
  const button  = screen.getByRole('button')

  //ensure that has a input in the Document
  expect(input).toBeInTheDocument()
  // ensure the button is disabled
  expect(button).toBeDisabled()
})