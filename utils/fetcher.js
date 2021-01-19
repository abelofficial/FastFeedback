import axios from 'axios';

const fetcher = async (url, token) => {
  const res = await axios.get(url, {
    headers: {
      'Connection-Type': 'application/json',
      Authorization: token,
      credentials: 'same-origin'
    }
  });

  return res.data;
};
export default fetcher;
