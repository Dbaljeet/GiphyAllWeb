/* eslint-disable indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, afterEach, expect } from 'vitest'
import Gif from '../src/components/Gif/Gif'

const props = {
  title: 'title',
  import_datetime: 'date',
  rating: '01',
  id: '1',
  images: { downsized_medium: { url: '' } }
}

const conds = [true, () => true]
const [cond, setCond] = conds

describe('renderizado Gif', () => {
  afterEach(cleanup)
  it('should render', () => {
    render(<Gif props={props} cond={cond} setCond={setCond} userGif={[]} />)
  })
  it('should render title "title" ', () => {
    render(<Gif props={props} cond={cond} setCond={setCond} userGif={[]} />)
    screen.getByText('title')
  })
})
