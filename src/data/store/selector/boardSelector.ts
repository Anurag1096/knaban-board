// store/selectors/boardSelectors.ts
import { RootState } from "../index";

export const selectFilteredBoards = (state: RootState) => {
const q = (state.column.searchQuery || "").toLowerCase();

  if (!state.column.boards) return []; // <--- fallback if boards is undefined

  if (!q) return state.column.boards;

  return state.column.boards.map(board => ({
    ...board,
    cards: board.cards.filter(card =>
      card.tagName.toLowerCase().includes(q)
    ),
  }));
};
