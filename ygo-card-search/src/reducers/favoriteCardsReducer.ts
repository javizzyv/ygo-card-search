export {};
// import { createSlice } from '@reduxjs/toolkit';
// import { selectSearchTerm } from "../searchBarSlice";

// export const favoriteCardsReducer = createSlice({
//     name: "favoriteCards",
//     initialState: Array,
//     reducers:{
//         addCard: (state, action) => state = action.payload,
//         removeCard: (state, action) => state = action.payload,
//         showAll: (state) => {return state}
//     },
// });

// export const selectFavoriteCards = (state) => state.favoriteCards;

// export const selectFilteredFavoriteCards = (state) => {
//     const favoriteCards = selectFavoriteCards(state);
//     const searchTerm = selectSearchTerm(state);

//     return favoriteCards.filter((card) =>
//         card.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
// };

// export const {addCard, removeCard, showAll} = favoriteCardsReducer.actions;
// export default favoriteCardsReducer.reducer;
