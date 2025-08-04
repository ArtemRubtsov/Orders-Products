import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '../../../entities/order/types';
import { mockOrders } from '../../../shared/api/mockData';

interface OrdersState {
  orders: Order[];
  selectedOrder?: Order;
}

const initialState: OrdersState = { 
  orders: mockOrders 
};


const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
    state.orders = action.payload;
    },
    selectOrder: (state, action: PayloadAction<number | undefined>) => {
      state.selectedOrder = state.orders.find(o => o.id === action.payload);
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(o => o.id !== action.payload);
    },
  },
});

export const { selectOrder, deleteOrder, setOrders } = ordersSlice.actions;
export default ordersSlice.reducer;