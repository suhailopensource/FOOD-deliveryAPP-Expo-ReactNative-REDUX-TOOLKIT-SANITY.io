import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeCartItem: (state, action) => {
            let newCart = [...state.items];
            let itemIndex = state.items.findIndex(
                (item) => item.id == action.payload.id
            );

            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            } else {
                console.log("item you want to remove deosnt exist");
            }
            state.items = newCart;
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, emptyCart, removeCartItem } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartItemsById = createSelector(
    [selectCartItems, (_, id) => id],
    (items, id) => items.filter((item) => item.id === id)
);

export const cartTotal = state =>
    state.cart.items.reduce((total, item) => (total = total + item.price), 0);

export default cartSlice.reducer;
