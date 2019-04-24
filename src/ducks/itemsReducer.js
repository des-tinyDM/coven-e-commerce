//Imports
import axios from "axios";

const GET_CAT_LIST = "GET_CAT_LIST";

const initialState = {
  categoryPage: "",
  catList: []
};

export function getCategoryList(category) {
  return {
    type: GET_CAT_LIST,
    payload: axios.get(`/items?category=${category}`)
  };
}

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_CAT_LIST}__PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_CAT_LIST}__FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        catList: action.payload
      });
    default:
      return state;
  }
}
