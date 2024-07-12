import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addSymbol: (state, action: PayloadAction<string>) => {
        state.value += action.payload;
    },
    deleteSymbol: (state) => {
        state.value = state.value.slice(0, -1)
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const {addSymbol,deleteSymbol} = counterSlice.actions;
