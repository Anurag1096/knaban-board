import next from "next";
import {
  columnReducer,
  dndCard,
  updateTask,
  deleteTask,
  addTask,
  addColumn,
  searchType
} from "./ColumnSlice";
import { CardsProps } from "@/components/Cards/types";
import { describe, it, expect } from "vitest";
import { combineReducers } from "@reduxjs/toolkit";
//Pre Arrange
const initialState = {
  boards: [
    {
      name: "To do",
      createdAt: 1222,
      id: "1",
      cards: [
        {
          tagName: "Important",
          headings: "Design",
          discription: "some text about design",
          cardId: "01",
        },
      ],
    },
  ],
  searchQuery: "bug",
};
describe("columnslice Test's", () => {
  it("Adds task when addTask reducer is called", () => {
    //initial state length should increase by 1
    //Act
    const addTaskObj = {
      columnId: "1",
      cardId: "04",
      tagName: "Important",
      headings: "new heading",
      discription: "some dis",
    };
    const nextState = columnReducer(initialState, addTask(addTaskObj));
    const cardsState = nextState.boards[0].cards;
    const cardPresent = cardsState.some((card) => card.cardId === "04");
    //Assert

    expect(cardsState).toHaveLength(2);
    expect(cardPresent).toBe(true);
  });
  it("Adds column when addColumn reducer is called", () => {
    const columnProps = {
      id: "05",
      name: "New column",
      cards: [],
      createdAt: 18888272,
    };

    const nextState = columnReducer(initialState, addColumn(columnProps));
    expect(nextState).not.toBe(initialState);
    expect(nextState.boards).toHaveLength(2);
  });

  it("does not wipe search query while dragging", () => {
    const nextState = columnReducer(
      initialState,

      dndCard([{ name:"", createdAt:12344455,id: "1", cards: [] }])
    );

    expect(nextState.searchQuery).toBe("bug");
  });

  it("Edits the discription feilds when updatetask is called ", () => {
    //Arrange

    //Act
    const newTask = {
      columnId: "1",
      cardId: "01",
      title: "Design",
      discription: "new text",
    };
    const newState = columnReducer(initialState, updateTask(newTask));
    //Assert
    expect(newState).not.toBe(initialState);
    expect(newState.boards).not.toBe(initialState.boards);

    //the card is updated

    const updatedCards = newState.boards[0].cards[0];
    expect(updatedCards.discription).toBe("new text");
    expect(updatedCards.headings).toBe("Design");
    expect(updatedCards.tagName).toBe("Important");
  });

  it("Deletes the specified card", () => {
    const deleteSpecified = {
      columnId: "1",
      cardId: "01",
    };

    // Act
    const newState = columnReducer(initialState, deleteTask(deleteSpecified));

    // Assert – immutability
    expect(newState).not.toBe(initialState);
    expect(newState.boards).not.toBe(initialState.boards);

    const cardExists = newState.boards[0].cards.some(
      (card) => card.cardId === "01"
    );

    expect(cardExists).toBe(false);

    // Assert – original state untouched
    expect(initialState.boards[0].cards.length).toBe(1);
  });


  it("updates searchQuery param in the state",()=>{
       const newState=columnReducer(initialState,searchType("newSearch"))
      expect(newState.searchQuery).toBe("newSearch")
  })
});
