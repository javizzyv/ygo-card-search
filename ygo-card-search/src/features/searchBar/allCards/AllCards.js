import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  Card  from "../../../components/Card.js";
import { selectFilteredAllCards } from "./allCardsSlice";

const AllCards = () => {
    const dispatch = useDispatch();
    const allCards = useSelector(selectFilteredAllCards);
    // console.log(allCards);
    const {isLoading} = useSelector((state) => state.allCards);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {allCards.map(card => (
                <Card card={card} key={card.id}>
                    Add to Favorites
                </Card>
            ))}
        </div>
    )
}

export default AllCards;