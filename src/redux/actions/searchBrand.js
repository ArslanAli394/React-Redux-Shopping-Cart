import { SPECIFIC_BRAND, ALL_BRAND, SEARCH_BRAND } from "./actionType";

export const searchItem = (value) => {
  return {
    type: SPECIFIC_BRAND,
    payload: value,
  };
};
export const searchAllItem = () => {
  return {
    type: ALL_BRAND,
  };
};
export const searchBarItem = (value) => {
  return {
    type: SEARCH_BRAND,
    payload: value,
  };
};
