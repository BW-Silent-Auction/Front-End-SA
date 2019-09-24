import {
    REG_B_DATA_START,
    REG_B_DATA_SUCCESS,
    REG_B_DATA_FAILURE,
    REG_S_DATA_START,
    REG_S_DATA_SUCCESS,
    REG_S_DATA_FAILURE
  } from "../actions";
  
  const initialState = {
    userId: null,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REG_B_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case REG_B_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case REG_B_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case REG_S_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case REG_S_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case REG_S_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
      default:
        return state;
    }
  };
  