import React, { useEffect, useState } from 'react';
import UsersComponent from '../components/UsersComponent';

const UsersContainer = () => {
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

  return <UsersComponent users={users} />;
};

export default UsersContainer;
