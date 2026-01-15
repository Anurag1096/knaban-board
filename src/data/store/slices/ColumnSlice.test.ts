import { columnReducer, dndCard, updateTask,deleteTask } from "./ColumnSlice";
import { describe, it, expect } from "vitest";
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
describe("columnslice", () => {
  it("does not wipe search query while dragging", () => {
    const nextState = columnReducer(
      initialState,

      dndCard([{ id: "1", cards: [] }])
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
  const newState = columnReducer(
    initialState,
    deleteTask(deleteSpecified)
  );

    // Assert – immutability
  expect(newState).not.toBe(initialState);
  expect(newState.boards).not.toBe(initialState.boards);

  // Assert – card removed
  expect(newState.boards[0].cards.length).toBe(0);

  // Assert – original state untouched
  expect(initialState.boards[0].cards.length).toBe(1);
  });
});
