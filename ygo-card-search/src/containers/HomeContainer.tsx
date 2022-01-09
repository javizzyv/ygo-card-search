import React from 'react';

const Home = (props: any) => {
  const { t } = props;

  return <h1>{t('home.greet')}</h1>;
};

export default Home;
