/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'
import Search from '../src/components/Search'

describe('renderizado busqueda', () => {
  afterEach(cleanup)
  it('should render search', () => {
    render(<Search />)
  })
  it('should render search->input', () => {
    render(<Search />)
    const input = screen.getAllByPlaceholderText('buscar')
    input.textContent = '404'
  })
  it('should write "testing" in page and click submit', () => {
    render(<Search />)
    const input = screen.getAllByPlaceholderText('buscar')
    input.value = 'testing'
    const submit = screen.getByRole('button')
    fireEvent.click(submit)
    expect(screen.findByText('testing'))
  })
})
