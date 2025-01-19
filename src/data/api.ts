export const getCatsData = () => {
  const url = 'https://api.thecatapi.com/v1/breeds';
  fetch(url, { headers: { 'x-api-key': import.meta.env.VITE_API_KEY } }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Something went wrong');
      }
    },
  );
};
