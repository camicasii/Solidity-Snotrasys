import { configureStore } from '@reduxjs/toolkit';
import contract from './contract';

const store = configureStore({
  reducer: {
    contract
  },
});

export default store
