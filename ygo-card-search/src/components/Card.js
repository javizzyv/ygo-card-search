import React from "react";
import '../styles';
import {SearchBar} from '../features/searchBar/SearchBar';
import {FavoriteCards} from '../features/favoriteCards/FavoriteCards';


export const Card = (props) => {

    //const {img, handleChange, cards, attack, defense} = props;
    const {handleOnClick, cards, checkAtk, checkDef, checkLevel, show} = props;

    

    return (
        <div>
            <FavoriteCards>
                
            </FavoriteCards>


            <SearchBar
                cards={cards}
                checkAtk={checkAtk}
                checkDef={checkDef}
                checkLevel={checkLevel}>
            </SearchBar>

            <button className="btn btn-primary my-1" onClick={handleOnClick}>Show All</button>
            {show && (
                <ul className="list-group list-unstyled text-align-right">
                <h1 className="my-1">All cards:</h1>
                {cards.map(card => (
                    <li className="list-group-item" key={card.name}>
                        <div className="container">
                            <div className="row my-1">
                                <div className="row">
                                    <div className="col-6">
                                        {/* {card.name === `"A" Cell Breeding Device` ? <img src={card.card_images[0].image_url_small} alt="cardImage"></img> : undefined } */}
                                        {/* <button className="btn btn-primary" onClick={handleOnClick(card)}>Show image</button> */}
                                        {/* <img src="https://i.pinimg.com/originals/47/9d/18/479d1838d36bbd71c165d42a3b816216.png" className="w-25" alt="cardImage"></img> */}
                                        <img src='' className="w-25" alt="cardImage"></img>
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
            )}        
        </div>
    )
};