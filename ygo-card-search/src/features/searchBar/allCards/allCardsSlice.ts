import { createSlice } from "@reduxjs/toolkit";

export const allCardsReducer = createSlice({
    name: "allCards",
    initialState: Array,
    reducers:{
        addCard: (state, action) => state = action.payload,
        removeCard: (state, action) => state = action.payload,
        showAll: (state) => {return state}
    },
})

export const {addCard, removeCard, showAll} = allCardsReducer.actions;
export default allCardsReducer.reducer;

// interface Props {
//     id: number
// }

// interface Action {
//     type: string,
//     payload: {
//         id: number
//     }
// }

// const initialState:Array<Props> = [];

// export const allCardsReducer = (allCards = initialState, action:Action) => {
//     switch(action.type){
//         case 'favoriteCards/addCard': 
//             return allCards.filter(card => card.id !== action.payload.id);

//         case 'favoriteCards/removeCard':
//             return [...allCards, action.payload];

//         default:
//             return allCards;
//     }
// }