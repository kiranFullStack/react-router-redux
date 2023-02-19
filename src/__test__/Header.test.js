import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

test('Header', () => {
  render(<Header />)
  const linkElement = screen.getByText(/Header/i)
  expect(linkElement).toBeInTheDocument()
})
