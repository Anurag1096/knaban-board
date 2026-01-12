import { columnReducer, dndCard } from "./ColumnSlice";
import { describe, it, expect } from "vitest";

describe("columnslice", () => {
  it("does not wipe search query while dragging", () => {
    const initialState = {
      boards: [{ id: "1", cards: [] }],
      searchQuery: "bug",
    };

    const nextState = columnReducer(
      initialState,

      dndCard([{ id: "1", cards: [] }])
    );

    expect(nextState.searchQuery).toBe("bug");
  });
});
