import { render, screen } from '@testing-library/react'
import Footer from '../components/Footer'

test('Footer', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/Footer/i)
  expect(linkElement).toBeInTheDocument()
})
