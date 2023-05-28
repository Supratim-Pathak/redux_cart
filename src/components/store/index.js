import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/uiSllice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{ui:uiSlice.reducer, cart:cartSlice.reducer}
})


export const uiSliceAction = uiSlice.actions
export const cartSliceAction = cartSlice.actions

export default store