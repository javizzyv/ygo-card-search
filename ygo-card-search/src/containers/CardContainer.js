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

  return (
    <Card
        cards={cards}
        handleChange={handleChange}
    ></Card>
  )
};