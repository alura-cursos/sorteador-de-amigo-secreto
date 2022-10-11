import React from 'react'
import { screen } from '@testing-library/react'

import { render } from "../utils/test/customRenderer"
import { useParticipantsList } from '../state/hooks/useParticipantsList'

import Draw from './Draw'

jest.mock('../state/hooks/useParticipantsList.ts', () => {
  return {
    useParticipantsList: jest.fn()
  }
})

describe('<Draw />', () => {
  const participants = ['Ana', 'Gabriela', 'Matheus']
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants)
  })
  test('all participants can get a secret friend', () => {
    render(<Draw />)

    const options = screen.queryAllByRole('option')

    expect(options).toHaveLength(participants.length)
  })
})