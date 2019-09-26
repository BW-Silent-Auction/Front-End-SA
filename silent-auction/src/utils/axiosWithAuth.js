import axios from 'axios';

// Build a module that "creates" a new "instance" of the axios object
// - baseURL
// - headers object -> authorization header with the token

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
