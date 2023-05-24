import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  skuArr: string[],
}

const initialState: CounterState = {
  skuArr: [],
};

export const selectorReducer = createSlice({
  name: 'selector',
  initialState,
  reducers: {
    pushSku: (state, action: PayloadAction<string>) => {
      if (!state.skuArr.includes(action.payload)) state.skuArr.push(action.payload);
    },
    removeSku: (state, action: PayloadAction<string>) => {
      state.skuArr.forEach((sku, idx) => {
        if (sku === action.payload) {
          state.skuArr.splice(idx, 1);
        }
      });
    },
  },
});

export const { pushSku, removeSku } = selectorReducer.actions;

export default selectorReducer.reducer;
