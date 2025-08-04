import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import ordersReducer from '../features/Orders/model/order.slice';
import productsReducer from '../features/Products/model/products.slice'

const rootReducer = combineReducers({
  orders: ordersReducer,
  products: productsReducer
});



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
