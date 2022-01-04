import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setUsers(jsonRes));
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </div>
  );
};

export default Users;
