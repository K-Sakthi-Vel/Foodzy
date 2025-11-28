import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from './cartSlice'; // Re-using CartItem type

type WishlistState = {
  items: CartItem[];
};

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItemToWishlist(state, action: PayloadAction<CartItem>) {
      const found = state.items.find((i) => i.id === action.payload.id);
      if (!found) {
        state.items.push(action.payload);
      }
    },
    removeItemFromWishlist(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearWishlist(state) {
      state.items = [];
    },
  },
});

export const { addItemToWishlist, removeItemFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
