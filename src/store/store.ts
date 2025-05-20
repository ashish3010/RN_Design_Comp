import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../Design_Components/Header/store/headerSlice'

const store = configureStore({
  reducer: {
    headerInfo: headerReducer
  },
});

export type StoreState = ReturnType<typeof store.getState>;

export default store;
