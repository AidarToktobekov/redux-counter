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
      state.value = String(state.value).slice(0, -1)

    },
    getEnter:(state)=>{
      try{
        state.value = eval(state.value);
      }catch(error){
        alert('error');
        state.value = '';
      }      
    },
  },
});

export const counterReducer = counterSlice.reducer;
export const {addSymbol,deleteSymbol,getEnter} = counterSlice.actions;
