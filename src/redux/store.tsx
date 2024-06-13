import { configureStore } from "@reduxjs/toolkit"
import { rememberMeSlice } from "./rememberMeSlice"
import { userInfosSlice } from "./userInfosSlice"
import { loginSlice } from "./loginSlice"
import { signOutSlice } from "./signOutSlice"

export const store = configureStore({
    reducer: {
        RememberMe : rememberMeSlice.reducer,
        UserInfos : userInfosSlice.reducer,
        Login : loginSlice.reducer,
        SignOut : signOutSlice.reducer
    }
}
    
)
export type RootState = ReturnType<typeof store.getState>;