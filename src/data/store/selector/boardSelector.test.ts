import { selectFilteredBoards } from "./boardSelector";
import {it ,expect} from 'vitest'
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

it("does not remove cards from raw state", () => {
  

  const filtered = selectFilteredBoards(state as any);

  expect(filtered[0].cards.length).toBe(1);
  expect(state.column.boards[0].cards.length).toBe(2); // 

  //it returns the corect result when filtring opperation is performed. 
  expect(filtered[0].cards[0].tagName).toBe("ui bug")
});

