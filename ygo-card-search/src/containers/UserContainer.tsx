import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import UserComponent from '../components/UserComponent';
import { setToken } from '../reducers/user';

const UserContainer = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = props;
  const dispatch = useDispatch();

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { email, password };

    const data = await fetch(`http://localhost:5000/api/user/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });

    const res = await data.json();

    if (res.error === null) {
      dispatch(setToken(res.data.token));
    }
  };

  return <UserComponent t={t} handleAuth={handleAuth} setEmail={setEmail} setPassword={setPassword} />;
};

export default UserContainer;
