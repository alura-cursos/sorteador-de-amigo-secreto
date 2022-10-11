import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { render } from '../utils/test/customRenderer'
import { useParticipantsList } from '../state/hooks/useParticipantsList'

import Play from './Play'

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn()
  }
})

const mockNavigation = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigation
  }
})

describe('<Play />', () => {
  describe('when are not enough participants', () => {
    beforeEach(() => {
      (useParticipantsList as jest.Mock).mockReturnValue([])
    })
    test('the game cannot be started', () => {
      render(<Play />)

      const button = screen.getByRole('button')
      
      expect(button).toBeDisabled()
    })
  })
  describe('when are enough participants', () => {
    const participantsMock = ['Ana', 'Gatito', 'Rodriguéz']
    beforeEach(() => {
      (useParticipantsList as jest.Mock).mockReturnValue(participantsMock)
    })
    test('the game can be start', () => {
      render(<Play />)

      const button = screen.getByRole('button')

      expect(button).toBeEnabled()
    })
    test('the has been game started', () => {
      render(<Play />)

      const button = screen.getByRole('button')
      
      fireEvent.click(button)

      expect(mockNavigation).toHaveBeenCalledTimes(1)
      expect(mockNavigation).toHaveBeenCalledWith('/sorteio')
    })
  })
})