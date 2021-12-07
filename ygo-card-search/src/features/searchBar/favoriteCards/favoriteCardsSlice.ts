// import { createSlice } from "@reduxjs/toolkit";
// const initialState = [];

// export const favoriteCardsReducer = (favoriteCards = initialState, action) => {
//     switch(action.type) {
//         case 'favoriteCards/addCard': {
//             return [...favoriteCards, action.payload];
//         }

//         case 'favoriteCards/removeCard': {
//             return favoriteCards.filter(card => card.id !== action.payload.id);
//         }

//         default: {
//             return favoriteCards;
//         }
//     }
// }

// export const addCard = (card) => {
//     return {
//         type: 'favoriteCards/addCard',
//         payload: card
//     }
// }

// export const removeCard = (card) => {
//     return {
//         type: 'favoriteCards/removeCard',
//         payload: card
//     }
// }

import { createSlice } from "@reduxjs/toolkit";

export const favoriteCardsReducer = createSlice({
    name: "favoriteCards",
    initialState: Array,
    reducers:{
        addCard: (state, action) => state = action.payload,
        removeCard: (state, action) => state = action.payload,
        showAll: (state) => {return state}
    },
})

export const {addCard, removeCard, showAll} = favoriteCardsReducer.actions;
export default favoriteCardsReducer.reducer;