'use client'
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { deleteOrder, setOrders } from '../model/order.slice';
import { mockOrders } from '../../../shared/api/mockData';
import OrderList from './OrderList';
import OrderDetailView from './OrderDetailView';
import { TransitionState, useOrderSelection } from '../hooks/useOrderSelection';

export default function Orders() {
  const dispatch = useAppDispatch();
  const orders = useAppSelector(state => state.orders.orders);
  const products = useAppSelector(state => state.products.products);

  useEffect(() => {
    if (orders.length === 0) {
      dispatch(setOrders(mockOrders));
    }
  }, [dispatch, orders.length]);

  const { selectedOrder, transitionState, handleSelect, handleClose } = useOrderSelection();
  const handleDelete = (id: number) => dispatch(deleteOrder(id));

  const getAnimationClass = (state: TransitionState, isList: boolean) => {
    if (state === 'list' && isList) return 'animate__animated animate__slideInUp animate__faster';
    if (state === 'toDetail' && isList) return 'animate__animated animate__slideOutDown animate__faster';
    if (state === 'toList' && !isList) return 'animate__animated animate__slideOutDown animate__faster';
    return '';
  };

  let viewToRender: React.ReactNode;

  if (transitionState === 'list') {
    viewToRender = (
      <div className={getAnimationClass(transitionState, true)}>
        <OrderList orders={orders} compact={false} onSelect={handleSelect} onDelete={handleDelete} />
      </div>
    );
  } else if (['detail', 'switchOut', 'switchIn'].includes(transitionState)) {
    if (!selectedOrder) return null; 
    viewToRender = (
      <OrderDetailView
        orders={orders}
        products={products}
        selectedOrder={selectedOrder}
        transitionState={transitionState}
        onClose={handleClose}
        onSelect={handleSelect}
        onDelete={handleDelete}
      />
    );
  } else if (transitionState === 'toDetail') {
    viewToRender = (
      <div className={getAnimationClass(transitionState, true)}>
        <OrderList orders={orders} compact={false} onSelect={handleSelect} onDelete={handleDelete} />
      </div>
    );
  } else if (transitionState === 'toList') {
    if (!selectedOrder) return null;
    viewToRender = (
      <div className={getAnimationClass(transitionState, false)}>
        <OrderDetailView
          orders={orders}
          products={products}
          selectedOrder={selectedOrder}
          transitionState={transitionState}
          onClose={handleClose}
          onSelect={handleSelect}
          onDelete={handleDelete}
        />
      </div>
    );
  }

  return (
    <div className="flex-grow-1 ps-8 pt-6 pe-10 bg-light z-0">
      <div className="d-flex justify-content-start align-items-center mb-5 gap-3">
        <div className="icon-plus-circle">
          <span>✚</span>
        </div>
        <h4 className="mb-0 ">Приходы / 25</h4>
      </div>
      {viewToRender}
    </div>
  );
}
