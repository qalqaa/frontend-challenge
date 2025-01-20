import { Cat, IBreed } from '@/model/breed';

const api = 'https://api.thecatapi.com/v1';

export const getCatsBreeds = async (
  apiKey: string,
  page: number,
  limit: number,
): Promise<IBreed[]> => {
  const url = `${api}/breeds?limit=${limit}&page=${page}`;
  try {
    const response = await fetch(url, {
      headers: { 'x-api-key': apiKey },
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
  userApiKey: string,
): Promise<Cat[]> => {
  const url = `${api}/images/search?limit=${picturesPerPage}&breed_ids=${breed}&api_key=${userApiKey}`;
  try {
    const response = await fetch(url, {
      headers: { 'x-api-key': userApiKey },
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
