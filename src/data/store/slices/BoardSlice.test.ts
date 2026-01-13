import { boardReducer, addBoard, deleteBoard } from "./BoardSlice";

import { it, describe, expect } from "vitest";

describe("Test for board slice", () => {
  //Arrage
  it("creats board when addBoard is called", () => {
    const initialState = [
      { id: "6", name: "Board6", columns: 2, createdAt: 1715893800034 },
    ];
    const newBoard = {
      id: "7",
      name: "Board7",
      columns: 2,
      createdAt: 1715893800038,
    };
    //Act
    const nextState = boardReducer(initialState, addBoard(newBoard));

    //Assert

    expect(nextState.length).toBe(2);

    expect(nextState).toContainEqual(newBoard);

    expect(nextState).not.toBe(initialState);
  });

  it("deletes board when deleteBoard is called", () => {
    //Arrange

    const initialState = [
      { id: "6", name: "Board6", columns: 2, createdAt: 1715893800034 },
    ];

    //Act
    const nextState = boardReducer(initialState, deleteBoard({ id: "6" }));

    //Assert
    expect(nextState).toHaveLength(0);
    expect(initialState).toHaveLength(1);
  });

  it("Should not delete if there is no board with the given id", () => {
    //Arrange
    const initialState = [
      { id: "3", name: "Board3", columns: 4, createdAt: 1715893800032 },
    ];
    //Act
    const nextState = boardReducer(initialState, deleteBoard({ id: "234" }));

    //Assert
    expect(nextState).toEqual(initialState);
  });

  it("Return initial state when action is undefined",()=>{
    const nextState=boardReducer(undefined,{type:"UNKNOWN"})
    expect(nextState).toEqual([])
  })
});
