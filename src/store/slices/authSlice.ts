import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/client';

type User = {
  id?: string;
  email?: string;
};

type AuthState = {
  user?: User;
  token?: string;
  isLogged: boolean;
  otpSent: boolean;
  otpVerified: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: undefined,
  token: undefined,
  isLogged: false,
  otpSent: false,
  otpVerified: false,
  loading: false,
  error: null,
};

export const sendOtp = createAsyncThunk('api/auth/sendOtp', async (email: string, { rejectWithValue }) => {
  try {
    const response = await api.post('/api/auth/send-otp', { email });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async ({ email, otp }: { email: string; otp: string }, { rejectWithValue }) => {
  try {
    const response = await api.post('/api/auth/verify-otp', { email, otp });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

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
      state.otpSent = false;
      state.otpVerified = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpSent = false;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpVerified = false;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpVerified = true;
        state.isLogged = true; // Or handle user session as needed
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
