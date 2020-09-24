import data from "../../Data/Data";

const productReducer = (state = data, action) => {
  let item = state.products;

  switch (action.type) {
    case "SPECIFIC_BRAND":
      let findItem = item.filter((find) => find.type === action.payload);

      return {
        ...state,
        filterProduct: findItem,
      };
    case "ALL_BRAND":
      return {
        ...state,
        filterProduct: state.products,
      };
    case "SEARCH_BRAND":
      let search = item.filter((find) =>
        find.name.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        filterProduct: search,
      };

    default:
      return {
        ...state,
        filterProduct: state.products,
      };
  }
};

export default productReducer;
