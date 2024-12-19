import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:{
        userInfo:null
    },
    reducers:{
        signInUser:()=>{},
        signUpUser:()=>{},
    }
});

export const {signInUser, signUpUser } = userSlice.actions;
export default userSlice.reducer;