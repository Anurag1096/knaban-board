
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { configureStore, type PreloadedState } from "@reduxjs/toolkit";
import type { ReactElement } from "react";

import boardReducer from "@/data/store/slices/BoardSlice";
import columnReducer from "@/data/store/slices/ColumnSlice";
import type { RootState } from "@/data/store";
export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState,
  }: {
    preloadedState?: PreloadedState<RootState>;
  } = {}
) {
  const store = configureStore({
    reducer: {
      boards: boardReducer,
      columns: columnReducer,
    },
    preloadedState,
  });

  return {
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}
