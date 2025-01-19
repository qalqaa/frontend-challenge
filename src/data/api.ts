import { Cat, IBreed } from '../model/breed';

const api = 'https://api.thecatapi.com/v1';

export const getCatsBreeds = async (): Promise<IBreed[]> => {
  const url = `${api}/breeds`;
  try {
    const response = await fetch(url, {
      headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCatsByBreed = async (
  breed: string,
  picturesPerPage: number,
  pageNumber: number,
): Promise<Cat[]> => {
  const url = `${api}/images/search?limit=${picturesPerPage}&page=${pageNumber}&breed_ids=${breed}&api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  try {
    const response = await fetch(url, {
      headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};
