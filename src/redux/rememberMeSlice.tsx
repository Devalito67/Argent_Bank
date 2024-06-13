import { createSlice } from "@reduxjs/toolkit";

export const rememberMeSlice = createSlice({
    name: "RememberMe",
    initialState:{
        checked: false,
        token: ""
    },
    reducers: {
        isChecked : ( state, action) => {
            state.checked = action.payload
        },
        setToken : ( state, action) => {
            state.token = action.payload
        }
    }
})

export const { isChecked, setToken } = rememberMeSlice.actions;

export default rememberMeSlice.reducer;