import { GlobalSliceType } from '@/types_and_interfaces/types';
import { createSlice } from '@reduxjs/toolkit';


const initialState: GlobalSliceType = {
  home_mode: "events", //events and products
  carts_qty: 0
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {

    set_home_mode: (state: GlobalSliceType, { payload }) => {
      state.home_mode = payload
    },
    set_carts_qty: (state: GlobalSliceType, { payload }) => {
      state.carts_qty = payload
    }

  }
})


export const { set_home_mode, set_carts_qty } = globalSlice.actions

export default globalSlice.reducer