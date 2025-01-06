import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'


const initialState = {
    adminId: Cookies.get('adminId') || null ,
    adminToken: Cookies.get('adminToken') || null,
    isAdmin: Boolean(Cookies.get('adminToken') || null),
};

const authAdminSlice = createSlice({
    name: 'authAdmin',
    initialState,
    reducers: {
        setAdminAuthData(state, action) {
            state.adminToken = action.payload.token; 
            state.adminId = action.payload.userId
            Cookies.set('adminToken', action.payload.token,{ expires: 7, secure: true });
            Cookies.set('adminId', action.payload.userId,{ expires: 7, secure: true });
        },
        clearAdminAuthData(state) {
            state.adminToken = null;
            Cookies.remove('adminToken');
        }
    },
});

export const { setAdminAuthData, clearAdminAuthData } = authAdminSlice.actions;
export default authAdminSlice.reducer;