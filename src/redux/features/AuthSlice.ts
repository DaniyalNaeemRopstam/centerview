import { createAction, createSlice } from "@reduxjs/toolkit";
import { removeToken, setToken } from "../../helpers/AuthToken";
export const resetUserState = createAction("user/resetState");
// import AuthService from "../api/AuthService";

export interface LoginState {
  token: string;
  isLoggedIn: boolean;
  userID: string;
  userType: string;
  userName: string;
  phone: string;
  location: any;
  images: any;
  email: any;
  otp: string;
  password: string;
  confirmPassword: string;
  isProfileComplete: boolean;
}

const initialState: LoginState = {
  userName: "",
  token: "",
  isLoggedIn: false,
  userID: "",
  userType: "User",
  phone: "",
  location: {
    longitude: -122.431297,
    latitude: 37.773972,
  },
  images: [],
  email: "",
  otp: "",
  password: "",
  confirmPassword: "",
  isProfileComplete: false,
};

const loginSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    saveUser: (state, action) => {
      state.token = action.payload?.token;
      state.userID = action.payload?.userID;
      state.userType = action.payload?.userType;
      state.userName = action.payload?.userName;
      state.phone = action.payload?.phone;
      state.location = action.payload?.location;
      state.isLoggedIn = action.payload?.isLoggedIn;
      state.images = action.payload?.images;
      state.email = action.payload?.email;
      state.otp = action.payload?.otp;
      state.password = action.payload?.password;
      state.confirmPassword = action.payload?.confirmPassword;
      state.isProfileComplete = action.payload?.isProfileComplete;
    },
    deleteToken: (state) => {
      setToken("");
      removeToken();
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetUserState, () => {
      return { ...initialState };
    });
  },
});

// export const loginOTPThunk = createAsyncThunk(
//   'loginOtp',
//   async (loginData: any, thunkAPI) => {
//     try {
//       return await AuthService.loginOtpApi(loginData);
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         const errResp = error.response?.data?.desc;
//         return thunkAPI.rejectWithValue(errResp);
//         // Handle your error type safe here
//       } else {
//         // Handle the unknown
//       }
//     }
//   },
// );

export const { saveUser, deleteToken } = loginSlice.actions;
export default loginSlice.reducer;
