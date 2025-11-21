"use client";
import { configureStore} from "@reduxjs/toolkit";
import BoardReducer from './slices/BoardSlice'
import ColumnReducer from './slices/ColumnSlice'
export const store= configureStore({
reducer:{
    board:BoardReducer,
    column:ColumnReducer,
}
})


export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch;