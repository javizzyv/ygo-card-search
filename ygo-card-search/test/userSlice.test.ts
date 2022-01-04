import userReducer, { clearToken } from '../src/reducers/userReducer';
import { setToken } from '../src/reducers/userReducer';

// // interface State {
// //     name: string,
// //     type: string,
// //     desc: string
// // }

describe('User reducer', () => {
  test('Should be able to save the token', () => {
    const userState = 'testToken';
    expect(userReducer('', setToken(userState))).toEqual(userState);
  });

  test('Should be able to clear the token', () => {
    const userState = 'testToken';
    expect(userReducer(userState, clearToken())).toEqual('');
  });
});
