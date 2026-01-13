import { boardReducer,addBoard,deleteBoard } from "./BoardSlice";

import {it ,describe ,expect} from 'vitest'


describe("Test for board slice",()=>{
    //Arrage
    it("creats board when addBoard is called",()=>{
       const initialState=[
        { id: "6", name: "Board6", columns: 2, createdAt: 1715893800034 }
       ]

       //Act
       const nextState=boardReducer(initialState,addBoard({id:"7",name:"Board7",columns:2,createdAt:1715893800038}))


       //Assert

       expect(nextState.length).toBe(2)
    })

    it("deletes board when deleteBoard is called",()=>{
        //Arrange

       const initialState=[
        { id: "6", name: "Board6", columns: 2, createdAt: 1715893800034 }
       ]

       //Act
       const nextState=boardReducer( initialState,deleteBoard({id:"6"}))

       //Assert
       expect(nextState.length).toBe(0)

    })
})