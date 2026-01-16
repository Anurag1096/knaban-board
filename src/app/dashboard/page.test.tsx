import { describe,it,expect } from "vitest";
import { renderWithProviders } from "@/test-utils/renderWithProviders";
import { screen } from "@testing-library/dom";
import DashboardPage from "./page";
describe("Dashboard layout test file",()=>{
    it("renders the dashboard layout with required component",()=>{
        //  
        
   renderWithProviders(<DashboardPage />, {
  preloadedState: {
   board: [
      {
       id: "1", name: "Board1", columns: 4, createdAt: 1715893800000 
      },
    ],
  },
});

        expect(screen.getByText("Board1")).toBeInTheDocument()
    })
})