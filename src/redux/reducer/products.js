import {
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  SEARCH_PRODUCT,
} from "../action/products";
const initialState = {
  isLoading: false,
  productList: [],
  productDetails: {},
  total: null,
};
export default function product(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
