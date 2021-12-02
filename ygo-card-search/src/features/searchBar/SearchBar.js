// import {useSelector, useDispatch} from 'react-redux';
// import { clearSearchTerm, setSearchTerm, selectSearchTerm } from './searchBarSlice';
import React, {useReducer, useState} from 'react';

export const SearchBar = (props) => {

    const {cards, checkLevel, checkAtk, checkDef}= props;
    // const initialState = {
    //     cardsR: []
    // };

    // const cardsReducer = (state = initialState, action) => {

    //     switch(action.type) {
    //         case 'cards/allCards': {
    //             return {...state, cardsR: action.payload};
    //         }

    //         case 'cards/Filter': {
    //             return {...state, action.payload[0].filter((card) => {
    //                 card.name.includes(action.payload[1]);
    //             })
    //         }}

    //         default: {
    //             return state;
    //         }
    //     }
    // }
    
    // const dispatch = useDispatch();
    // const searchTerm = useSelector(selectSearchTerm);
    const [search, setSearch] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    
    // const [cardState, dispatch] = useReducer(cardsReducer, initialState);

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setSearch(searchWord);
        const newFilter = cards.filter((card) => {
            return card.name.includes(searchWord);
        });
        if(e.target.value.length > 0)
            setFilteredCards(newFilter);
        else
            setFilteredCards([]);
    }

    // const handleFilter = (e) => {
    //     const searchWord = e.target.value;
    //     setSearch(searchWord);
    //     const newFilter = dispatch(cards, {type: 'cards/Filter', payload: e.target.value});

    //     setFilteredCards(newFilter);
    // }

    

    // const onSearchChangeHandler = (e) => {
    //     dispatch(setSearchTerm(e.target.value));
    // }

    // const onSearchTermClearHandler = () => {
    //     dispatch(clearSearchTerm());
    // }

    return (
        <div>
            <input
                id='cardSearcherValue'
                type="text"
                // value={searchTerm}
                // onChange={onSearchChangeHandler}
                value={search}
                onChange={handleFilter}
                placeholder='Search cards'
            ></input>

            {filteredCards.length !==0 && (
                <ul className="list-group list-unstyled text-align-right">
                <h1 className='my-1'>Search Result:</h1>
                {cards.map(card => (
                    <li className="list-group-item" key={card.name}>
                        <div className="container">
                            <div className="row my-1">
                                <div className="row">
                                    <div className="col-6">
                                        {/* {card.name === `"A" Cell Breeding Device` ? <img src={card.card_images[0].image_url_small} alt="cardImage"></img> : undefined } */}
                                        {/* <button className="btn btn-primary" onClick={handleOnClick(card)}>Show image</button> */}
                                        {/* <img src="https://i.pinimg.com/originals/47/9d/18/479d1838d36bbd71c165d42a3b816216.png" className="w-25" alt="cardImage"></img> */}
                                        <img src='' className="w-25" alt="cardImage"></img>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            Name: {card.name}
                                        </div>
                                        <div className="row">
                                            Type: {card.type}
                                        </div>

                                        {checkLevel(card)}

                                        {checkAtk(card)}

                                        {checkDef(card)}
                                        
                                        <div className="row">
                                            <a className="btn btn-primary" href={`https://db.ygoprodeck.com/card/?search=${card.name}`} role="button">More info</a>
                                            {/* <a className="btn btn-primary" href="" role="button">More info</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
}

export default SearchBar;