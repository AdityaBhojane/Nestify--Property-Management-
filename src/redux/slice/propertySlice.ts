import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    updateUserModal:false,
    updatePropertyModal:false,
};

const propertySlice = createSlice({
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

export const {setUserModal, setPriorityModal} = propertySlice.actions;
export default propertySlice.reducer