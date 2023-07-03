import {createSlice} from '@reduxjs/toolkit';

export const usrSlice=createSlice({
    name:"user",
    initialState:{
       user:null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload

        },
    
    }
})

export const {setUser}=usrSlice.actions;    