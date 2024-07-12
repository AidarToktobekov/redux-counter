import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: '0',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addSymbol: (state, action: PayloadAction<string>) => {
      if(state.value === '0'){
        state.value = '';
      }
        state.value += action.payload;
    },
    deleteSymbol: (state) => {
      state.value = String(state.value).slice(0, -1);
      if(state.value === ''){
        state.value = '0';
      }
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
