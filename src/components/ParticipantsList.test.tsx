import React from 'react'
import { screen } from '@testing-library/react'

import { render } from '../utils/test/customRenderer'
import Participants from './Participants'
import { useParticipantsList } from '../state/hooks/useParticipantsList'

jest.mock('../state/hooks/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn()
  }
})

describe('<Participants />', () => {
  describe('Empty Participants', () => {
    beforeEach(() => {
      (useParticipantsList as jest.Mock).mockReturnValue([])
    })
    test('should return a empty list', () => {
      render(<Participants />)
  
      const items = screen.queryAllByRole('listitem')
  
      expect(items).toHaveLength(0)
    })
  })
  describe('Filled Participants', () => {
    const participantsMock = ['Ana', 'Gatito', 'Rodriguéz']
    beforeEach(() => {
      (useParticipantsList as jest.Mock).mockReturnValue(participantsMock)
    })
    test('should return participants list', () => {
      render(<Participants />)
  
      const items = screen.queryAllByRole('listitem')
      
      expect(items).toHaveLength(participantsMock.length)
    })
  })
})