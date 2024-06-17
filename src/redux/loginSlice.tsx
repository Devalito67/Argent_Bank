import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "Login",
    initialState:{
        email: localStorage.getItem('emailLogin') || '',
        password: ""
    },
    reducers: {
        setEmail : ( state, action) => {
            state.email = action.payload;
            localStorage.setItem('emailLogin', action.payload);
        },
        setPassword : ( state, action) => {
            state.password = action.payload
        }
    }
})

export const { setEmail, setPassword } = loginSlice.actions;

export default loginSlice.reducer;