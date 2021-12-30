import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateCard = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [desc, setDesc] = useState('');
  const { _id } = useParams();
  console.log(_id);

  const handleUpdateCard = (e) => {
    e.preventDefault();
    const card = { name, type, desc };
    console.log(card);
    console.log(JSON.stringify(card));

    fetch(`http://localhost:5000/api/cards/update/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(card)
    }).then(() => {
      console.log('card updated');
    });
  };

  return (
    <div className="container">
      <h2 className="my-3">Update a card:</h2>
      <form onSubmit={handleUpdateCard}>
        <div className="form-outline mb-4">
          <label className="form-label">Name:</label>
          <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Type:</label>
          <select className="form-select" onChange={(e) => setType(e.target.value)}>
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
          <textarea className="form-control" onChange={(e) => setDesc(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-success btn-block mb-4">
          Update Card
        </button>
        <a href="/listAll" role="button">
          Back
        </a>
      </form>
    </div>
  );
};

export default UpdateCard;
