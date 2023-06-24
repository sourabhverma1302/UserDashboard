import { createSlice } from "@reduxjs/toolkit";

const SetShow=createSlice({
    name:'setshow',
    initialState:{
        showornot:false,
        mainbar:'experience'
    },
    reducers:{
        showornot:(state,action)=>{
            state.showornot=action.payload;
        },
        showmainbar:(state,action)=>{
            state.mainbar=action.payload;
        }
    }
})

export const{showornot,showmainbar} =SetShow.actions;
export default SetShow.reducer;