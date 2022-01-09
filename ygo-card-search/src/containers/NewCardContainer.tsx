import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../actions/allCards';
import NewCardComponent from '../components/NewCardComponent';

const NewCardContainer = (props: any) => {
  const dispatch = useDispatch();
  const { t } = props;
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');

  const handleNewCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const card = { name, type, desc };

    dispatch(addCard(card));
  };

  return <NewCardComponent t={t} setName={setName} setType={setType} setDesc={setDesc} handleNewCard={handleNewCard} />;
};

export default NewCardContainer;
