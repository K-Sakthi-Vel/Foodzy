import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/client';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
  image?: string;
};

type CartState = {
  items: CartItem[];
  loading: boolean;
  error: string | null;
};

const initialState: CartState = {
  items: [],
  loading: false,
  error: null,
};

type OrderDetails = {
  items: CartItem[];
  address: string;
  paymentOption: string;
  deliveryMethod: string;
  billingDetails: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postCode: string;
    country: string;
    regionState: string;
  };
  userId: string;
  totalAmount: number;
  deliveryFee: number;
};

export const createOrder = createAsyncThunk(
  'cart/createOrder',
  async (orderDetails: OrderDetails, { dispatch, rejectWithValue }) => {
    try {
      const response = await api.post('/api/auth/create-order', orderDetails);
      if (response.status === 201) {
        dispatch(cartSlice.actions.clearCart()); // Use action from the same slice
        return response.data;
      } else {
        return rejectWithValue(response.data?.message || 'Failed to place order');
      }
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.loading = false;
        // Cart is cleared by the thunk itself on success
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addItem, updateQty, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
