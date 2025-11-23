import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/client';

type User = {
  id: string; // User ID is now required
  email: string; // Email is now required
  name?: string; // Add name field to User type
};

type AuthState = {
  user?: User; // Make user required
  token?: string;
  isLogged: boolean;
  otpSent: boolean;
  otpVerified: boolean;
  loading: boolean;
  error: string | null;
  message: string | null;
};

const initialState: AuthState = {
  user: undefined,
  token: undefined,
  isLogged: false,
  otpSent: false,
  otpVerified: false,
  loading: false,
  error: null,
  message: null,
};

export const sendOtp = createAsyncThunk('api/auth/sendOtp', async (email: string, { rejectWithValue }) => {
  try {
    const response = await api.post('/api/auth/send-otp', { email });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data?.message || error.response.data || error.message);
  }
});

export const verifyOtp = createAsyncThunk('auth/verifyOtp', async ({ email, otp }: { email: string; otp: string }, { rejectWithValue }) => {
  try {
    const response = await api.post('/api/auth/verify-otp', { email, otp });
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response.data?.message || error.response.data || error.message);
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
    },
    setOtpVerifiedState(state, action: PayloadAction<boolean>) {
      state.otpVerified = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpSent = false;
        state.message = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message || null;
        state.otpSent = action.payload.otpSent || false; // Set otpSent based on payload
        state.otpVerified = action.payload.otpVerified || false; // Set otpVerified based on payload

        if (action.payload.user) {
          state.user = action.payload.user;
          state.isLogged = true;
          // Also store in localStorage similar to verifyOtp success if needed on frontend
          localStorage.setItem('otpVerified', 'true');
          localStorage.setItem('user', JSON.stringify({ id: action.payload.user.id, email: action.payload.user.email }));
        }
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.otpSent = false;
        state.otpVerified = false;
        state.user = undefined;
        state.isLogged = false;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.otpVerified = false;
        state.message = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpVerified = true;
        state.isLogged = true;
        state.message = action.payload.message || null;
        state.user = action.payload.user; // Store user object (including id and email)
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUser, logout, setOtpVerifiedState } = authSlice.actions;
export default authSlice.reducer;
