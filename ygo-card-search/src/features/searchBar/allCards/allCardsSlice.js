const initialState = [];

export const allCardsReducer = (allCards = initialState, action) => {
    switch(action.type){
        case 'favoriteCards/addCard': 
            return allCards.filter(card => card.id !== action.payload.id);

        case 'favoriteCards/removeCard':
            return [...allCards, action.payload];

        default:
            return allCards;
    }
}