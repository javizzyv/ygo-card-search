//http://localhost:5000/api/card/newCard
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const NewCard = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');

  const handleNewCard = (e) => {
    e.preventDefault();
    const card = { name, type, desc };
    console.log(card);
    console.log(JSON.stringify(card));

    fetch(`/api/card/newCard`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card)
    }).then(() => {
      console.log('new card added');
    });
  };

  return (
    <div className="container">
      <h2 className="my-3">Add a new card:</h2>
      <form onSubmit={handleNewCard}>
        <div className="form-outline mb-4">
          <label className="form-label">Name:</label>
          <input className="form-control" type="text" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Type:</label>
          <select className="form-select" required onChange={(e) => setType(e.target.value)}>
            <option value="" selected disabled hidden>
              Select an option
            </option>
            <option value="monster">monster</option>
            <option value="spell">spell</option>
            <option value="trap">trap</option>
            <option value="xyz">xyz</option>
          </select>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Description:</label>
          <textarea className="form-control" required onChange={(e) => setDesc(e.target.value)} />
        </div>
        {/* <Link to="/listAll"> */}
        <a href="/listAll" role="button">
          <button type="submit" className="btn btn-success btn-block mb-4">
            Add Card
          </button>
        </a>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default NewCard;
