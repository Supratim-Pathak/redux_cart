import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartIsVisiable:false
}

const uiSlice = createSlice({
    name:'ui',
    initialState:initialState,
    reducers:{
        toggle(state){
            state.cartIsVisiable = !state.cartIsVisiable
        }
    },
    
})

export default uiSlice;