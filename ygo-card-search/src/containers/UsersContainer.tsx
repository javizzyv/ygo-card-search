import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import UsersComponent from '../components/UsersComponent';
import { selectUser } from '../reducers/user';

const UsersContainer = (props: any) => {
  const { t } = props;
  const [users, setUsers] = useState([]);
  const token = useSelector(selectUser);

  if (!token) {
    return <h1>{t('token.yes')}</h1>;
  }

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
