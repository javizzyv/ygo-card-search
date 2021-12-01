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
                                        Imagen{/* {card.card_images.image_url} */}
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
                                            {/* <a className="btn btn-primary" href={`db.ygoprodeck.com/card/?search=${card.name}`} role="button">More info</a> */}
                                            <a className="btn btn-primary" href="" role="button">More info</a>
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