import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    updateUserModal:false,
    updatePropertyModal:false,
};

const modalSlice = createSlice({
    name:"modals",
    initialState,
    reducers:{
        setUserModal:(state)=>{
            state.updateUserModal = !state.updateUserModal
        },
        setPriorityModal:(state)=>{
            state.updatePropertyModal = !state.updatePropertyModal
        }
    }
});

export const {setUserModal, setPriorityModal} = modalSlice.actions;
export default modalSlice.reducer