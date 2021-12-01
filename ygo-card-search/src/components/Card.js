import React from "react";
import '../styles';

export const Card = (props) => {

    //const {img, handleChange, cards, attack, defense} = props;
    const {handleChange, cards, checkAtk, checkDef, checkLevel} = props;

    

    return (
        <div>
            <input
                type='text'
                onChange={handleChange}
                className="form-control"
            >
            </input>

            <ul className="list-group list-unstyled text-align-right">
                {cards.map(card => (
                    <li className="list-group-item" key={card.name}>
                        <div className="container">
                            <div className="row my-1">
                                <div className="row">
                                    <div className="col-6">
                                        {/* {card.name === `"A" Cell Breeding Device` ? <img src={card.card_images[0].image_url_small} alt="cardImage"></img> : undefined } */}
                                        {/* <button className="btn btn-primary" onClick={handleOnClick(card)}>Show image</button> */}
                                        <img src="https://i.pinimg.com/originals/47/9d/18/479d1838d36bbd71c165d42a3b816216.png" className="w-25" alt="cardImage"></img>
                                    </div>
                                    <div className="col">
                                        <div className="row">
                                            Name: {card.name}
                                        </div>
                                        <div className="row">
                                            Type: {card.type}
                                        </div>

                                        {checkLevel(card)}

                                        {checkAtk(card)}

                                        {checkDef(card)}
                                        
                                        <div className="row">
                                            <a className="btn btn-primary" href={`https://db.ygoprodeck.com/card/?search=${card.name}`} role="button">More info</a>
                                            {/* <a className="btn btn-primary" href="" role="button">More info</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};