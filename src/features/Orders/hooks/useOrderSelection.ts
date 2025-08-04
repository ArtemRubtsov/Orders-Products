import { Order } from '@/entities/order/types';
import { useState } from 'react';

export type TransitionState = 'list' | 'detail' | 'toList' | 'toDetail' | 'switchOut' | 'switchIn';

export const useOrderSelection = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [transitionState, setTransitionState] = useState<TransitionState>('list');

  const handleSelect = (order: Order) => {
    if (selectedOrder?.id === order.id) {
    } else if (selectedOrder) {
      setTransitionState('switchOut');
      setTimeout(() => {
        setSelectedOrder(order);
        setTransitionState('switchIn');
        setTimeout(() => {
          setTransitionState('detail');
        }, 500);
      }, 500);
    } else {
      setSelectedOrder(order);
      setTransitionState('toDetail');
      setTimeout(() => {
        setTransitionState('detail');
      }, 500);
    }
  };

  const handleClose = () => {
    if (selectedOrder) {
      setTransitionState('toList');
      setTimeout(() => {
        setTransitionState('list');
        setSelectedOrder(null);
      }, 500);
    }
  };

  return { selectedOrder, transitionState, handleSelect, handleClose };
};