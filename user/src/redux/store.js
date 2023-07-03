import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import { alertsSlice } from './alertsReducer';
import { usrSlice } from './userSlice';


const rootReducer=combineReducers({
    alerts:alertsSlice.reducer,
    user:usrSlice.reducer,
})

const store=configureStore({
     reducer:rootReducer,
})

export default store;   