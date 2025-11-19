import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  id?: string;
  email?: string;
};

type AuthState = {
  user?: User;
  token?: string;
  isLogged: boolean;
};

const initialState: AuthState = {
  user: undefined,
  token: undefined,
  isLogged: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    logout(state) {
      state.user = undefined;
      state.token = undefined;
      state.isLogged = false;
    }
  }
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
