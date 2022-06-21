import { render, screen } from '@testing-library/react'

test('renders react component', () => {
  render(<div>hello react</div>)
  const divElement = screen.getByText(/hello react/i)
  expect(divElement).toBeInTheDocument()
})
