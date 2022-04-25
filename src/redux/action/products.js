export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";

export function getListProduct(payload) {
  return {
    type: SEARCH_PRODUCT,
    payload: payload,
  };
}
export function createProduct(payload) {
  return {
    type: CREATE_PRODUCT,
    payload: payload,
  };
}
export function deleteProduct(payload) {
  return {
    type: DELETE_PRODUCT,
    payload: payload,
  };
}
export function updateProduct(payload) {
  return {
    type: UPDATE_PRODUCT,
    payload: payload,
  };
}
