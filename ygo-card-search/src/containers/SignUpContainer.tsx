import React, { useState } from 'react';
import SignUpComponent from '../components/SignUpComponent';

const SignUpContainer = (props: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = props;

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = { name, email, password };

    fetch(`http://localhost:5000/api/user/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    });
  };

  return <SignUpComponent t={t} handleAuth={handleAuth} setName={setName} setEmail={setEmail} setPassword={setPassword} />;
};

export default SignUpContainer;
