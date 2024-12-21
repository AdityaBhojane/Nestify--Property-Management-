import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'


const initialState = {
    user: null,
    token: Cookies.get('token') || null 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token; 
            Cookies.set('token', action.payload.token);
        },
        clearAuthData(state) {
            state.user = null;
            state.token = null;
            Cookies.remove('token');
        }
    },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;

