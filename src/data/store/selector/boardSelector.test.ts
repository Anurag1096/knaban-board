import { selectFilteredBoards } from "./boardSelector";
import {it ,expect} from 'vitest'
it("does not remove cards from raw state", () => {
  const state = {
    column: {
      searchQuery: "ui",
      boards: [
        {
          id: "1",
          cards: [
            { cardId: "a", tagName: "ui bug" },
            { cardId: "b", tagName: "backend" },
          ],
        },
      ],
    },
  };

  const filtered = selectFilteredBoards(state as any);

  expect(filtered[0].cards.length).toBe(1);
  expect(state.column.boards[0].cards.length).toBe(2); // 
});
