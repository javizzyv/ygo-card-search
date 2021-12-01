import React, {useState, useEffect} from "react";
import { Card } from "../components/Card";

export const CardContainer = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
            .then(res => res.json())
            .then(
                (result) => {
                    setCards(result.data);
                });
    }, []);
  
  const handleChange = value => {
      setCards(value);
  }

  /*const handleOnClick = card => {
      return (
        <img src={card.card_images[0].image_url_small} alt="cardImage"></img>
      );
  }*/

    const checkLevel = (card) => {
        if (card.level) {
            return (
                <div className="row">
                    Level: {card.level}
                </div>)
        }
    }

    const checkAtk = (card) => {
        if(card.atk){
            return (
            <div className="row">
                Level: {card.atk}
            </div>)
        }
    }

    const checkDef = (card) => {
        if(card.def){
            return (
            <div className="row">
                Level: {card.def}
            </div>)
        }
    }

  return (
    <Card
        cards={cards}
        handleChange={handleChange}
        checkAtk={checkAtk}
        checkDef={checkDef}
        checkLevel={checkLevel}
        // handleOnClick={handleOnClick}
    ></Card>
  )
};