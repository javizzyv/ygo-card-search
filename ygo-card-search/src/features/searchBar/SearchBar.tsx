// import {useSelector, useDispatch} from 'react-redux';
// import { clearSearchTerm, setSearchTerm, selectSearchTerm } from './searchBarSlice';
// import React, { ChangeEventHandler, useReducer, useState } from 'react';
import React, { useState } from 'react';

interface CardType {
  level: number;
  atk: number;
  def: number;
  name: string;
  type: string;
}

interface Props {
  cards: CardType[];
  checkAtk: Function;
  checkDef: Function;
  checkLevel: Function;
}

export const SearchBar = (props: Props) => {
  const { cards, checkLevel, checkAtk, checkDef } = props;
  const [search, setSearch] = useState<string>('');
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    setSearch(searchWord);
    const newFilter = cards.filter((card) => {
      return card.name.includes(searchWord);
    });
    if (e.target.value.length > 0) setFilteredCards(newFilter);
    else setFilteredCards([]);
  };

  return (
    <div>
      <input id="cardSearcherValue" type="text" value={search} onChange={handleFilter} placeholder="Search cards"></input>

      {filteredCards && filteredCards.length !== 0 && (
        <ul className="list-group list-unstyled text-align-right">
          <h1 className="my-1">Search Result:</h1>
          {filteredCards.map((card) => (
            <li className="list-group-item" key={card.name}>
              <div className="container">
                <div className="row my-1">
                  <div className="row">
                    <div className="col-6">
                      {/* {card.name === `"A" Cell Breeding Device` ? <img src={card.card_images[0].image_url_small} alt="cardImage"></img> : undefined } */}
                      {/* <button className="btn btn-primary" onClick={handleOnClick(card)}>Show image</button> */}
                      {/* <img src="https://i.pinimg.com/originals/47/9d/18/479d1838d36bbd71c165d42a3b816216.png" className="w-25" alt="cardImage"></img> */}
                      <img src="" className="w-25" alt="cardImage"></img>
                    </div>
                    <div className="col">
                      <div className="row">Name: {card.name}</div>
                      <div className="row">Type: {card.type}</div>

                      {checkLevel(card)}

                      {checkAtk(card)}

                      {checkDef(card)}

                      <div className="row">
                        <a className="btn btn-primary" href={`https://db.ygoprodeck.com/card/?search=${card.name}`} role="button">
                          More info
                        </a>
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
  );
};

export default SearchBar;
