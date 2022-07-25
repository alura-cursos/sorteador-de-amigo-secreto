import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { RecoilRoot } from 'recoil'

import { Form } from '.'

describe('Form behavior 🚀️', () => {
  it('shouldn\'t add participants if input is empty', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
  
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  
    const button = screen.getByRole('button')
  
    expect(input).toBeInTheDocument()  
    expect(button).toBeDisabled()
  })
  
  it('Should be add a participant if there is a name filled in', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
  
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  
    const button = screen.getByRole('button')
  
    fireEvent.change(input, {
      target: {
        value: 'Raniery Sales'
      }
    })
  
    fireEvent.click(button)
  
    expect(input).toHaveFocus()
    expect(input).toHaveValue('')
  })
  
  it('Shouldn\'t add a duplicated name', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
  
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  
    const button = screen.getByRole('button')
  
    fireEvent.change(input, {
      target: {
        value: 'Raniery Sales'
      }
    })
  
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Raniery Sales'
      }
    })
  
    fireEvent.click(button)
  
    const messageError = screen.getByRole('alert')
    expect(messageError.textContent).toBe('Nomes duplicados não são permitidos!')
  })
  
  it('Error message should be lost after three minutes', () => {
    jest.useFakeTimers()
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    )
  
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
  
    const button = screen.getByRole('button')
  
    fireEvent.change(input, {
      target: {
        value: 'Raniery Sales'
      }
    })
  
    fireEvent.click(button)
    fireEvent.change(input, {
      target: {
        value: 'Raniery Sales'
      }
    })
  
    fireEvent.click(button)
  
    let messageError = screen.queryByRole('alert')
    expect(messageError).toBeInTheDocument() 
  
    act(() => {
      jest.runAllTimers()
    })  
  
    messageError = screen.queryByRole('alert')
    expect(messageError).toBeNull()
  })
})

