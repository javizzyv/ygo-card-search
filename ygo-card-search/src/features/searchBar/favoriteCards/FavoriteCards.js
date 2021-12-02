import React, {useReducer} from 'react';
import { favoriteCardsReducer, addCard, removeCard } from './favoriteCardsSlice';

export const favoriteCards = (props) => {
    const [favCards, dispatch] = useReducer(favoriteCardsReducer, initialState);

    const onRemoveCardHandler = (card) => {
        dispatch(removeCard(card));
    }


    return (
        <div>
        
        </div>
    );
}

export default favoriteCards;