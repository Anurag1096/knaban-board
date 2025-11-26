import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Board } from "@/components/CreateBoard/types/BoardTypes";

// The initial state for every board is an empty array
const initialState: Board[] = [
  {
    id: "1",
    name: "To-do",
    columns: {
      cards: [
        { cardId: "01", tagName: "Ok", headings: "esponsive Website Design for 23 more clients", discription: "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit." },
        { cardId: "02", tagName: "Not that Important", headings: "rrResponsive Website Design for 23 more clients", discription: "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit." },
        { cardId: "03", tagName: "High Priority", headings: "Responsive Website Design for 23 more clients", discription: "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit." },
      ],
    },
    createdAt: "today",
  },
  {
    id: "2",
    name: "In Progress",
    columns: {
    
      
      cards: [{ cardId: "04", tagName: "Important", headings: "UI/UX Design in the age of AI", discription: "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit." }],
    },
    createdAt: "today",
  },
  {
    id: "3",
    name: "Completed",
    columns: {
     
   
      cards: [{ cardId: "05", tagName: "Low Priority", headings: "Blog Copywriting (Low priority 😅)", discription: "Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit." }],
    },
    createdAt: "",
  },
];

const columnSlice = createSlice({
  name: "column",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Board>) => {
      state.push(action.payload);
    },
    dndCard:(state,action:Payload<Board)=>{
    //the payload will be a new object all together.. maybe?
    
    }
    // need to add update task reducer
  },
});

export const { addTask } = columnSlice.actions;
export default columnSlice.reducer;
