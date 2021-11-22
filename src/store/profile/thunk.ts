import { AppDispatch } from '../index';
import { UserData, setUser, setLoading } from './index';

export const getUserInfo = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const user = (await response.json()) as UserData;

    dispatch(setUser(user));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};
