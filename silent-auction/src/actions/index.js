import axios from "axios";

export const REG_B_DATA_START = "REG_B_DATA_START";
export const REG_B_DATA_SUCCESS = "REG_B_DATA_SUCCESS";
export const REG_B_DATA_FAILURE = "REG_B_DATA_FAILURE";

export const REG_S_DATA_START = "REG_S_DATA_START";
export const REG_S_DATA_SUCCESS = "REG_S_DATA_SUCCESS";
export const REG_S_DATA_FAILURE = "REG_S_DATA_FAILURE";

export const registerBuyer = () => dispatch => {
  dispatch({ type: REG_B_DATA_START });
  axios
    .post(`https://bw-silent-auction.herokuapp.com/api/buyers/register`)
    .then(res => {
      // console.log(res);
      dispatch({ type: REG_B_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REG_B_DATA_FAILURE, payload: err.data.slip });
    });
};

export const registerSeller = () => dispatch => {
  dispatch({ type: REG_S_DATA_START });
  axios
    .post(`https://bw-silent-auction.herokuapp.com//api/sellers/register`)
    .then(res => {
      // console.log(res);
      dispatch({ type: REG_S_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REG_S_DATA_FAILURE, payload: err.data.slip });
    });
};
