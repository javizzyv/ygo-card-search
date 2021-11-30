import './App.css';
import {CardContainer} from './containers/CardContainer';
// import React, {useState, useEffect} from "react";

function App() {

  /*const [cards, setCards] = useState([]);

  useEffect(() => {
      fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
        .then(res => res.json())
        .then(
            (result) => {
                setCards(result.data);
            });
  },[]);*/

  return (
    <div className="App">
      
      <CardContainer>

      </CardContainer>
    </div>
  );
}

export default App;
/*
<ul>
        {cards.map(card => (
          <li key={card.name}>
            {card.name}
          </li>
        ))}
      </ul>

      <li>{cards.name}</li>
*/