import { configureStore } from '@reduxjs/toolkit';
import contract from '../redux/contract';

export const store = configureStore({
  reducer: {
    contract
  },
});
