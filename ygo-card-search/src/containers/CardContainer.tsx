import React from 'react';
import { useTranslation } from 'react-i18next';
import CardComponent from '../components/CardComponent';

interface Card {
  name: string;
  type: string;
  desc: string;
  _id: number;
}

interface Props {
  card: Card;
}

const CardContainer = (props: Props) => {
  const [t] = useTranslation('global');
  const { card } = props;

  return <CardComponent card={card} t={t} />;
};

export default CardContainer;
