import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  Product } from '../../../entities/order/types';
import { mockProducts } from '../../../shared/api/mockData';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = { 
    products: mockProducts 
};


const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
    state.products = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(o => o.id !== action.payload);
    },
  },
});

export const { deleteProduct, setProducts } = productsSlice.actions;
export default productsSlice.reducer;