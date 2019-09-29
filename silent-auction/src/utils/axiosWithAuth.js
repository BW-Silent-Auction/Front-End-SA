import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://bw-silent-auction.herokuapp.com',
    headers: {
      authorization: token
    }
  });
};

export default axiosWithAuth;
