import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    console.log(user);
    console.log(JSON.stringify(user));

    fetch(`http://localhost:5000/api/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(() => {
      console.log('new user added');
    });
  };

  return (
    <div className="container">
      <h2 className="my-3">Sign up:</h2>
      <form onSubmit={handleAuth}>
        <div className="form-outline mb-4">
          <label className="form-label">Name:</label>
          <input className="form-control" type="text" required onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Email:</label>
          <input className="form-control" type="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Password:</label>
          <input className="form-control" type="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* <a href="/listAll" role="button"> */}
        <button type="submit" className="btn btn-success btn-block mb-4">
          Sign up
        </button>
        {/* </a> */}
      </form>
    </div>
  );
};

export default SignUp;
