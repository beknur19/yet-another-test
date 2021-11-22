import { AppDispatch } from 'store';
import { ImageItem, setItem, setLoading } from './index';

export const getMainPagePhoto = (imageId: number) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const photoList = (await response.json()) as ImageItem[];

    const item = photoList.find(photo => photo.id === imageId);

    if (item) dispatch(setItem(item));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(setLoading(false));
  }
};
