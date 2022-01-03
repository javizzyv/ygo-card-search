import userReducer, { clearToken } from '../src/features/searchBar/users/userSlice';
import { setToken } from '../src/features/searchBar/users/userSlice';

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
