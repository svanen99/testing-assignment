import {render, screen} from '@testing-library/react'
import Header from '.'

describe("Suite for header component", () => {
  
  it("Checks the header container is rendered", () => {
    render(<Header />)
    const headerContainer = screen.getByTestId("header")
    expect(headerContainer).toBeInTheDocument()
  })

  it("Checks that the header has a specific title", () => {
    render(<Header />)
    const headerText1 = screen.getByRole('heading', { level: 1, name: "ALEXANDRA BLOMBERG"})
    expect(headerText1).toBeInTheDocument()
  })

  it("Checks that the header has a specific subtitle", () => {
    render(<Header />)
    const headerText2 = screen.getByRole('heading', { level: 2, name: "Let's bloom together"})
    expect(headerText2).toBeInTheDocument()
  })
})