import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import History from '../History/History'

describe("History Initialized", () => {

  test("History Exist", () => {
    const {container} = render(<History />)
    expect(container).toBeInTheDocument()
  })
})
