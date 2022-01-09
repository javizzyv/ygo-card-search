import React from 'react';

interface user {
  name: string;
}

interface Users {
  users: user[];
}

const UsersComponent = (props: Users) => {
  const { users } = props;

  return (
    <div className="container">
      {users.map((user: user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersComponent;
