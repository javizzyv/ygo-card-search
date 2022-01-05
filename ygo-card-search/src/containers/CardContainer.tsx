import React from 'react';
import { useTranslation } from 'react-i18next';
import CardComponent from '../components/CardComponent';

interface Card {
  name: string;
  type: string;
  _id: number;
}

interface Props {
  children: any;
  card: Card;
}

export default function Card({ card }: Props) {
  const [t] = useTranslation('global');

  return <CardComponent card={card} t={t}></CardComponent>;
}
