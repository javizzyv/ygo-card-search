import {useSelector, useDispatch} from 'react-redux';
import searchBarSlice, { clearSearchTerm, setSearchTerm, selectSearchTerm } from './searchBarSlice';
import React from 'react';

const Search = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const onSearchChangeHandler = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    const onSearchTermClearHandler = () => {
        dispatch(clearSearchTerm());
    }

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={onSearchChangeHandler}
                placeholder='Search cards'
            ></input>
        </div>
    );
}

export default Search;