export {};
// import React, { useReducer } from 'react';
// import React from 'react';
// import { removeCard } from './favoriteCardsSlice';
// import {useDispatch, useSelector} from 'react-redux';
// // import { Card } from '../../../components/Card';
// import FavoriteButton from '../../../components/FavoriteButton';

// interface CardType {
//     level: number,
//     atk: number,
//     def: number,
//     name: string,
//     type: string
// }

// interface Props {
//     favoriteCards: CardType[],
//     dispatch: Function
// }

// export const FavoriteCards = (props:Props) => {
//     const dispatch = useDispatch();
//     const favoriteCards = useSelector(selectFilteredFavoritesCards);

//     const onRemoveCardHandler = (card:CardType) => {
//         dispatch(removeCard(card));
//     }

//     const createCardComponent = (card:CardType) => {
//         return (
//             <div>
//                 <FavoriteButton
//                     onClickHandler={() => onRemoveCardHandler(card)}
//                 >
//                     Remove Card
//                 </FavoriteButton>
//             </div>

//         )
//     }

//     return (
//         <div>
//             {favoriteCards.map(createCardComponent)}
//         </div>
//     );
// }

// export default FavoriteCards;
