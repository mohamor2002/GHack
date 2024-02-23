import { createSlice } from "@reduxjs/toolkit";
const loadUserFromLocalStorage = () => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

const initialState = {
  user: loadUserFromLocalStorage(),
};

/**
 * this function is used to store the user state on the browser
 * @function loginUser used for storing the user information
 * @function logoutUser used for deleting the user information
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));

    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');

    },
    
  },
});

export const { loginUser, logoutUser} = userSlice.actions;