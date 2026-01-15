/* eslint-disable @typescript-eslint/no-unused-expressions */
import {  screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Cards from "./Cards"
import { renderWithProviders } from "@/test-utils/renderWithProviders"
describe("Cards component", () => {
  it("renders card with correct content", () => {
    const props = {
      tagName: "Important",
      headings: "Design",
      discription: "some text about design",
      cardId: "01",
      columnId: "1",
    }

    renderWithProviders(<Cards {...props} />)

    // Assert visible contents
     expect(screen.getByText("Important")).to.exist
  expect(screen.getByText("Design")).to.exist
 
  expect(screen.getByText("some text about design")).to.exist
  })

  
})
