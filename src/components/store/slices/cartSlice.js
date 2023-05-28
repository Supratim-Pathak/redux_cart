import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items:[],
   totalQuantity:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        addTocart(state,action){
            const newItem = action.payload.item
            const existingItem = state.items.find((items)=> newItem.id === items.id)
        
            if (!existingItem) {
                state.items.push({...newItem,quantity:1,totalPrice:newItem.price})
                state.totalQuantity++
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice+newItem.price;
                state.totalQuantity++
            }
        },
        removeFromCart(state, action){

            const removeItem = action.payload.item 
            const existingItem = state.items.find((items)=> removeItem.id === items.id)

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(items=>items.id !== removeItem.id)
                state.totalQuantity--
            } else {
                existingItem.totalPrice= existingItem.totalPrice + removeItem.price;
                existingItem.quantity--
                state.totalQuantity--
            }   
        }
    }
})

export default cartSlice