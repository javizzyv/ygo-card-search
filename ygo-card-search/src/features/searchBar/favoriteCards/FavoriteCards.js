// import React, {useReducer} from 'react';
import React from 'react';
import { removeCard } from './favoriteCardsSlice';
// import {useDispatch} from 'react-redux';
import { Card } from '../../../components/Card';
import FavoriteButton from '../../../components/FavoriteButton';

export const FavoriteCards = (props) => {
    const {dispatch, favoriteCards} = props;

    const onRemoveCardHandler = (card) => {
        dispatch(removeCard(card));
    }

    const createCardComponent = (card) => {
        return (
            <Card
                card={card}
                key={card.id}
            >
                <FavoriteButton
                    onClickHandler={() => onRemoveCardHandler(card)}
                >
                    Remove Card
                </FavoriteButton>
            </Card>
        )
    }

    return (
        <div>
            {favoriteCards.map(createCardComponent)}
        </div>
    );
}


export default FavoriteCards;