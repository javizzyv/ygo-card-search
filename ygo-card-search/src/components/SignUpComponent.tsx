import React from 'react';

const SignUpComponent = (props: any) => {
  const { t, handleAuth, setName, setEmail, setPassword } = props;

  return (
    <div className="container col-5">
      <h2 className="my-3">{t('user.login')}:</h2>
      <form onSubmit={handleAuth}>
        <div className="form-outline mb-4">
          <label className="form-label">{t('card.name')}:</label>
          <input className="form-control" type="text" required onChange={(e) => setName(e.target.value)} />
        </div>
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
          {t('nav.sign')}
        </button>
        {/* </a> */}
      </form>
    </div>
  );
};

export default SignUpComponent;
