import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'


const initialState = {
    userId: Cookies.get('userId') || null ,
    token: Cookies.get('token') || null 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action) {
            state.token = action.payload.token; 
            state.userId = action.payload.userId
            Cookies.set('token', action.payload.token,{ expires: 7, secure: true });
            Cookies.set('userId', action.payload.userId,{ expires: 7, secure: true });
        },
        clearAuthData(state) {
            state.token = null;
            Cookies.remove('token');
        }
    },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;

