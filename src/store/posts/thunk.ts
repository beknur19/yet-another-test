import { AppDispatch } from '../index';
import { PostData, setPosts, setLoading } from './index';

export const getPosts = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = (await response.json()) as PostData[];

    dispatch(setPosts(posts.slice(0, 20)));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};
