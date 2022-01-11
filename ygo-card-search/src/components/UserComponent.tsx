import React from 'react';

const UserComponent = (props: any) => {
  const { t, handleAuth, setEmail, setPassword } = props;

  return (
    <div className="container col-5">
      <h2 className="my-3">{t('user.login')}:</h2>
      <form onSubmit={handleAuth}>
        <div className="form-outline mb-4">
          <label className="form-label">{t('user.email')}:</label>
          <input className="form-control" type="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">{t('user.password')}:</label>
          <input className="form-control" type="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* <a href="/listAll" role="button"> */}
        <button type="submit" className="btn btn-success btn-block mb-4">
          {t('user.login')}
        </button>
        {/* </a> */}
      </form>
    </div>
  );
};

export default UserComponent;
