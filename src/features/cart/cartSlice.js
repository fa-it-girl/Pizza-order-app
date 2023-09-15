import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [

  ],
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action){
      state.cart.push(action.payload)  //payload is new item
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      const numberItem = item.quantity++; // Increase the quantity if the item is found
      item.totalPrice = numberItem * item.unitPrice
    },
    decreaseQuantity(state, action){
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      const numberItem = item.quantity--; // Increase the quantity if the item is found
      item.totalPrice = numberItem * item.unitPrice

      if(item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state){
      state.cart =[]
    },
  }
})
export const numberofItems = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
export const totalPriceofItems = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)


export const {addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer
