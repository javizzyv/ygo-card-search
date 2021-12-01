// import {createStore, combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import searchBarReducer from './features/searchBar/searchBarSlice';

export default configureStore({
    reducer: {
        search: searchBarReducer
    },
});