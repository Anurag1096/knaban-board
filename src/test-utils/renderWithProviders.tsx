import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "@/data/store"

export function renderWithProviders(ui: React.ReactElement) {
  return render(<Provider store={store}>{ui}</Provider>)
}
