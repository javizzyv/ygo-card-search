import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeCard } from '../actions/allCards';
import CardInfoComponent from '../components/CardInfoComponent';

const CardInfoContainer = (props: any) => {
  const dispatch = useDispatch();
  const { _id }: any = useParams();

  const { t } = props;
  const [card, setCard]: any = useState({});

  const deleteCard = async (id: String) => {
    if (window.confirm('Are you sure?')) {
      await dispatch(removeCard(id));
    }
  };

  useEffect(() => {
    fetch(`/api/cards/${_id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setCard(jsonRes);
      });
  }, [_id]);

  return <CardInfoComponent t={t} card={card} deleteCard={deleteCard} _id={_id} />;
};

export default CardInfoContainer;
