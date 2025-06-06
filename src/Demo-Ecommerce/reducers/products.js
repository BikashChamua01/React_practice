export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_API_DATA": {
      const products = action.payload;
      const featuredProducts = products.filter((el) => el.featured);
      //  console.log(featuredProducts);
      return {
        ...state,
        isLoading: false,
        products,
        featuredProducts,
      };
    }

    case "SET_ERROR": {
      return {
        ...state,
        isError: true,
      };
    }

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleError: true,
        isSingleLoading: false,
      };
    default:
      break;
  }
};
