import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CardsProps } from "@/components/Cards/types";
import { Board } from "@/components/CreateBoard/types/BoardTypes";
interface CreateCardProp extends CardsProps {
  columnId: string;
}

// The initial state for every board is an empty array
const initialState: Board[] = [
  {
    id: "1",
    name: "To-do",
    cards: [
      {
        cardId: "01",
        tagName: "Ok",
        headings: "esponsive Website Design for 23 more clients",
        discription:
          "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.",
      },
      {
        cardId: "02",
        tagName: "Not that Important",
        headings: "rrResponsive Website Design for 23 more clients",
        discription:
          "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.",
      },
      {
        cardId: "03",
        tagName: "High Priority",
        headings: "Responsive Website Design for 23 more clients",
        discription:
          "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.",
      },
    ],

    createdAt: 0,
  },
  {
    id: "2",
    name: "In Progress",

    cards: [
      {
        cardId: "04",
        tagName: "Important",
        headings: "UI/UX Design in the age of AI",
        discription:
          "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.",
      },
    ],

    createdAt: 98,
  },
  {
    id: "3",
    name: "Completed",
    cards: [
      {
        cardId: "05",
        tagName: "Low Priority",
        headings: "Blog Copywriting (Low priority 😅)",
        discription:
          "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit.",
      },
    ],

    createdAt: 5666,
  },
];

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<CreateCardProp>) => {
      const { columnId, cardId, tagName, headings, discription } =
        action.payload;
      const getColumn = state.find((col) => col.id === columnId);
      if (getColumn) {
        getColumn.cards.push({
          cardId,
          tagName,
          headings,
          discription,
        });
      }
    },
    addColumn:(state,action:PayloadAction<{id:string,name:string,cards:CardsProps[],createdAt:number}>)=>{
        state.push(action.payload)
    },
    deleteTask:(state,action:PayloadAction<{columnId:string,cardId:string}>)=>{
         const {columnId,cardId}=action.payload;
         const getCol=state.find((col)=>col.id === columnId)
         if(!getCol) return
        const index = getCol?.cards.findIndex(card => card.cardId === cardId)
        if(index != -1){
           getCol.cards.splice(index, 1);
        }
    },
    dndCard: (state, action: PayloadAction<Board[]>) => {
      //the payload will be a new object all together.. maybe?
      return action.payload;
    },
    emptyTask: (state) => {
      state.length = 0;
    },
    // need to add update task reducer
  },
});

export const { addTask, dndCard, emptyTask,addColumn ,deleteTask} = columnSlice.actions;
export default columnSlice.reducer;
