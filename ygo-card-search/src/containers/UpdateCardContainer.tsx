import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateCard } from '../actions/allCards';
import UpdateCardComponent from '../components/UpdateCardComponent';

const UpdateCardContainer = (props: any) => {
  const { t } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const { _id } = useParams();

  const handleUpdateCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const card = { name, type, desc };

    const data = { _id, card };

    dispatch(updateCard(data));
  };

  return <UpdateCardComponent t={t} setName={setName} setType={setType} setDesc={setDesc} handleUpdateCard={handleUpdateCard} />;
};

export default UpdateCardContainer;
