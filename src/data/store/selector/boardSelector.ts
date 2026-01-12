import { RootState } from "..";
import { Board } from "@/components/CreateBoard/types/BoardTypes";

export const selectFilteredBoards = (state: RootState): Board[] => {
  const q = (state.column.searchQuery ?? "").trim().toLowerCase();
  const boards = state.column.boards ?? [];

  return boards.map(board => {
    const cards = board.cards ?? [];

    if (!q) {
      return { ...board, cards: [...cards] };
    }

    return {
      ...board,
      cards: cards.filter(card =>
        card.tagName?.toLowerCase().includes(q)
      ),
    };
  });
};
