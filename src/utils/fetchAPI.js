const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchAPI = async url => {
  const response = await fetch(`${BASE_URL}/${url}`, options);
  const data = await response.json();
  console.log(data);
  return data;
};
