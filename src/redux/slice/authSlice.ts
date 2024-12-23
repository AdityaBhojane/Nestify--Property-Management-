import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'


const initialState = {
    token: Cookies.get('token') || null 
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData(state, action) {
            state.token = action.payload.token; 
            Cookies.set('token', action.payload.token);
        },
        clearAuthData(state) {
            state.token = null;
            Cookies.remove('token');
        }
    },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;

