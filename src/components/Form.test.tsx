import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Form from './Form'

import { render } from '../utils/test/customRenderer'

const getFormElements = () => {
  const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  const button  = screen.getByRole('button')

  return [input, button]
}

const addPartipant = (input:Element, button:Element, value:string) => {
  fireEvent.change(input, {
    target: {
      value
    }
  })
  fireEvent.click(button)
}

describe('<Form />', () => {
  test('when the input is empty, cannot add a participant', () => {
    render(<Form />)

    const [input, button] = getFormElements()
  
    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })
  test('add a participant if name input is filled', () => {
    render(<Form />)
  
    const [input, button] = getFormElements()
  
    addPartipant(input, button, 'Ana Catarina')
  
    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })
  test('duplicated names cannot be added to the list', () => {
    render(<Form />)
  
    const [input, button] = getFormElements()
  
    addPartipant(input, button, 'Ana Catarina')
    addPartipant(input, button, 'Ana Catarina')
  
    const errorMessage = screen.getByRole('alert')
    expect(errorMessage.textContent).toBe('Nomes duplicados não são permitidos')
  })
  
  test('the error message should be disappear after the timers', () => {
    jest.useFakeTimers()
  
    render(<Form />)
  
    const [input, button] = getFormElements()
  
    addPartipant(input, button, 'Ana Catarina')
    addPartipant(input, button, 'Ana Catarina')
  
    let errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeInTheDocument()
  
    act(() => {
      jest.runAllTimers()
    })
  
    errorMessage = screen.queryByRole('alert')
    expect(errorMessage).toBeNull()
  })
})

