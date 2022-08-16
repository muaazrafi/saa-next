import { configureStore } from "@reduxjs/toolkit";
import apartmentSlice from "./apartmentSlice";
import apartmentsSlice from "./apartmentsSlice";
import authSlice from "./authSlice";
import bookingSlice from "./bookingSlice";
import cardSlice from "./cardSlice";
import contentSlice from "./contentSlice";
import helpSlice from "./helpSlice";
import helpSubCategoriesSlice from "./helpSubCategoriesSlice";
import helpArticlesSlice from "./helpArticlesSlice";
export const store = configureStore({
  reducer: {
    apartment: apartmentSlice,
    apartments: apartmentsSlice,
    auth: authSlice,
    booking: bookingSlice,
    card: cardSlice,
    content: contentSlice,
    help: helpSlice,
    helpSubCategory: helpSubCategoriesSlice,
    articles: helpArticlesSlice,
  },
});
