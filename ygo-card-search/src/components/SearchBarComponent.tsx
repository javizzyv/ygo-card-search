import React from 'react';

const SearchBarComponent = (props: any) => {
  const { t, searchTerm, onSearchChangeHandler } = props;

  return (
    <div className="container">
      <h1>{t('searchBar.type')}</h1>
      <input id="search" type="text" value={searchTerm} onChange={onSearchChangeHandler} placeholder={t('searchBar.placeholder')}></input>
    </div>
  );
};

export default SearchBarComponent;
