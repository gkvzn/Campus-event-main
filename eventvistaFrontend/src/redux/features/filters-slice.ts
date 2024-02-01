import { FilterSliceType } from '@/types_and_interfaces/types';
import { createSlice } from '@reduxjs/toolkit';


const initialState: FilterSliceType = {
  events: {
    query: '',
    min: 0,
    max: 0,
    date: '',
    time: '',
    interest: [],
    category: 0,
    from_date: '',
    to_date: ''
  },
  events_loading: false,
  shop: {
    brand: null,
    query: null,
    category: null,
    min: null,
    max: null
  },
  shop_loading: false,
  spaces: {
    query: null,
    guests: null,
    min: null,
    max: null,
    venue: null
  },
  space_loading: false,
}

export const globalSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {

    set_events_filter: (state: FilterSliceType, { payload }) => {
      state.events = payload
    },

    set_shop_filter: (state: FilterSliceType, { payload }) => {
      state.shop = payload
    },

    set_spaces_filter: (state: FilterSliceType, { payload }) => {
      state.spaces = payload
    }

  }
})


export const { set_events_filter, set_shop_filter, set_spaces_filter } = globalSlice.actions

export default globalSlice.reducer