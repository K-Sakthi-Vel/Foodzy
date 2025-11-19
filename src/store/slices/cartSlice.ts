import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const found = state.items.find((i) => i.id === action.payload.id);
      if (found) {
        found.qty += action.payload.qty;
      } else {
        state.items.push(action.payload);
      }
    },
    updateQty(
      state,
      action: PayloadAction<{ id: string; qty: number }>
    ) {
      const it = state.items.find((i) => i.id === action.payload.id);
      if (it) it.qty = action.payload.qty;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addItem, updateQty, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
