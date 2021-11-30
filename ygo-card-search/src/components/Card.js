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
                className="form-control"
            >
            </input>

            <ul className="list-group">
                {cards.map(card => (
                    <li className="list-group-item" key={card.name}>
                        {card.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};