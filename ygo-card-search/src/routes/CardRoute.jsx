import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardRoute = () => {
  console.log(useParams());
  const { id } = useParams();
  console.log(id);

  const [card, setCard] = useState({});

  //https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}

  useEffect(() => {
    console.log('Dentro de useEffect');
    // const loadCard = async () => {
    //   const data = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=34541863')
    //     .then((res) => res.json())
    //     .then((result) => {
    //       return result.data;
    //     });

    //   setCard(data);

    // };

    // loadCard();

    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=34541863')
      .then((res) => res.json())
      .then((result) => {
        setCard(result.data[0]);
      });

    console.log(card);
  }, [id]);

  return (
    <div className="container">
      <h3>{card.name}</h3>
      <p>{card.desc}</p>
    </div>
  );
};

export default CardRoute;
