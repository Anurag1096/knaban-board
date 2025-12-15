import { createSlice } from "@reduxjs/toolkit";
import { BoardTypes } from "@/components/CreateBoard/types/BoardTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: BoardTypes[] = [
      { id: "1", name: "Board1", columns: 4,createdAt:1715893800000 },
    { id: "2", name: "Board2", columns: 2 ,createdAt:1762893800000},
    { id: "3", name: "Board3", columns: 1 ,createdAt:1765583800000},
    { id: "4", name: "Board4", columns: 7 ,createdAt:1765793800000},
];

const BoardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (
      state,
      action: PayloadAction<{ id: string; name: string; columns: number,createdAt:number; }>
    ) => {
      state.push(action.payload);
    },

    updateBoard: (
      state,
      action: PayloadAction<{ id: string; name?: string; columns?: number }>
    ) => {
      const board = state.find((b) => b.id === action.payload.id);
      if (!board) return;

      if (action.payload.name !== undefined) board.name = action.payload.name;

      if (action.payload.columns !== undefined)
        board.columns = action.payload.columns;
    },
  },
});

export const { addBoard } = BoardSlice.actions;
export default BoardSlice.reducer;
