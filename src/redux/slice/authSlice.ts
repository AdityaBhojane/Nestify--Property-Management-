import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'


const initialState = {
    user:null,
    isAuthenticated:false
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthData(state,action){
            state.user = action.payload.user;
            state.isAuthenticated = false;
            Cookies.set('token',action.payload.token)
        },
        clearAuthData(state){
            state.user = null;
            state.isAuthenticated = false;
            Cookies.remove('token')
        }
    },
});

export const {setAuthData, clearAuthData} = authSlice.actions;
export default authSlice.reducer;
