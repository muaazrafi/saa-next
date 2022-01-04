import {
  createSlice
} from '@reduxjs/toolkit';
import { fetchApartments } from './services/apartment';

const initialState = {
  apartments: [],
  areas: [],
  amenties: [],
  selectedAmenties: [],
  city: [],
  currentPage: 0,
  featuredApartments: [],
  loading: true,
  maxPrice: 0,
  properties: [],
  search: {
    property_city_matches: "barcelona",
    number_of_max_occupants_gteq: "",
    property_area_in: [],
    apart_type_eq: null,
    startDate: null,
    endDate: null,
    lat: "",
    lng: "",
    page: 0
  },
  sortOrder: null,
  total: 0
}

export const apartmentsSlice = createSlice({
  name: 'apartments',
  initialState,
  reducers: {
    searching: (state, action) => {
      state.amenties = [];
      state.apartments = [];
      state.loading = true;
    },
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    selectAmenties: (state, action) => {
      state.selectedAmenties = action.payload;      
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApartments.fulfilled, (state, action) => {
      state.apartments = state.apartments.concat(action.payload.apartments);
      state.amenties = state.amenties.concat(action.payload.amenties_counts);
      state.areas = state.areas.concat(action.payload.area_counts);
      state.featuredApartments = state.featuredApartments.concat(action.payload.featured_apartments);
      state.properties = state.properties.concat(action.payload.properties);
      state.total = action.payload.apartment_count;
      state.maxPrice = action.payload.max_price;      
      state.loading = false;
    });
  },
});

export const { updateSearch, searching, selectAmenties } = apartmentsSlice.actions;

export default apartmentsSlice.reducer;