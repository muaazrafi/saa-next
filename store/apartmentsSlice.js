import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchApartments } from './services/apartment';

const initialState = {
  apartments: [],
  areas: [],
  amenties: [],
  city: [],
  currentPage: 0,
  featuredApartments: [],
  loading: true,
  max_price: 0,
  properties: [],
  search: {
    property_city_matches: "barcelona",
    number_of_max_occupants_gteq: "",
    property_area_in: [],
    apart_type_eq: null,
    startDate: null,
    endDate: null,
    lat: "",
    lng: ""
  },
  sortOrder: null,
  total: 0
}

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApartments.fulfilled, (state, action) => {
      state.apartments = state.apartments.concat(action.payload.apartments);
      state.amenties = state.amenties.concat(action.payload.amenties_counts);
      state.areas = state.areas.concat(action.payload.area_counts);
      state.loading = false;
    });
  },
});

export default apartmentsSlice.reducer;