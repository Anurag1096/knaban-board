import { describe, it, expect } from "vitest";
import { renderWithProviders } from "@/test-utils/renderWithProviders";
import { screen } from "@testing-library/dom";
import DashboardLayout from "./layout";

describe("Test for Dashboard main page", () => {
  it("renders sidebar tabs", () => {
    //Act
    renderWithProviders(
      <DashboardLayout>
        <div>
          <h3>klsadjfklasjfiower</h3>
        </div>
      </DashboardLayout>,
      {
        preloadedState: {
          board: [
            {
              id: "1",
              name: "Board1",
              columns: 4,
              createdAt: 1715893800000,
            },
          ],
        },
      }
    );

    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Analytics")).toBeInTheDocument()
  });
it("registers a click on the sidebar and switches page's",()=>{
    
})

});
