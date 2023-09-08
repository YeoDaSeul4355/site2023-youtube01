import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// options 변수에 url과 param, header 설정
const options = {
  url: BASE_URL,
  params: {
    maxResult: '20',
  },
  headers: {
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  },
};

export const fetchAPI = async url => {
  // axios get요청 받아옴
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
