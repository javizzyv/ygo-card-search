import React from "react";
import '../styles';

export const Card = (props) => {

    //const {img, handleChange, cards, attack, defense} = props;
    const {handleChange, cards} = props;

    return (
        <div>
            <input
                type='text'
                onChange={handleChange}
            >
            </input>

            <ul>
                {cards.map(card => (
                    <li key={card.name}>
                        {card.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};