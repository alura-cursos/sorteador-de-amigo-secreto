import React from 'react'

import { render } from '../utils/test/customRenderer'

import Config from './Config'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('<Config />', () => {
  test('should be rendered', () => {
    const {container} = render(<Config />)

    expect(container).toMatchSnapshot()
  })
})