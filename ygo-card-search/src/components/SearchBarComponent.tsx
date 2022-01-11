import React from 'react';

const SearchBarComponent = (props: any) => {
  const { t, searchTerm, onSearchChangeHandler } = props;

  return (
    <div className="container">
      <h1 className="my-2">{t('searchBar.type')}</h1>
      <div className="input-group rounded">
        <div className="col-2">
          <input type="search" className="form-control rounded my-4" value={searchTerm} onChange={onSearchChangeHandler} placeholder={t('searchBar.placeholder')}></input>
        </div>
      </div>
    </div>
  );
};

export default SearchBarComponent;
