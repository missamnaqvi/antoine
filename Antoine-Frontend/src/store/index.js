import { configureStore } from "@reduxjs/toolkit";
/**
 * Slices
*/
import countrySlice from "./slices/countrySlice";
import productListingSlice from "./slices/productSlice";

/**
 * Store
 */
const store = configureStore({
  reducer: {
    countries: countrySlice,
    productListingSlice: productListingSlice
  },
});

export default store;
