import { createSlice } from "@reduxjs/toolkit";

export const signOutSlice = createSlice({
    name: "SignOut",
    initialState:{
        signOut: false,
    },
    reducers: {
        setSignOut: (state, action) => {
            state.signOut = action.payload;
        },
        setSignIn: (state, action) => {
            state.signOut = !action.payload;
        }
    }
})
export const { setSignOut, setSignIn } = signOutSlice.actions;

export default signOutSlice.reducer;