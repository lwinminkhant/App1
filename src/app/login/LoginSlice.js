import {createSlice} from '@reduxjs/toolkit';

const loginState = {
  loginStatus: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginState,
  reducers: {
    login: (state, action) => {
      console.log('action.payload', action.payload);
      state.loginStatus = true;
    },
    logout: state => {
      state.loginStatus = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = loginSlice.actions;
const loginReducer = loginSlice.reducer;
export default loginReducer;
