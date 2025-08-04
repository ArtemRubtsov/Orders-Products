import React from 'react';
import Products from './Products'; 
import OrderList from './OrderList';
import { Order, Product } from '../../../entities/order/types';
import { TransitionState } from '../hooks/useOrderSelection';


interface OrderDetailViewProps {
  orders: Order[];
  products: Product[]; 
  selectedOrder: Order;
  transitionState: TransitionState;
  onClose: () => void;
  onSelect: (order: Order) => void;
  onDelete?: (id: number) => void;
}

const OrderDetailView: React.FC<OrderDetailViewProps> = ({ orders, products, selectedOrder, transitionState, onClose, onSelect, onDelete }) => {
  const leftAnimationClass = 'animate__animated animate__slideInUp animate__faster';
  const rightAnimationClass = transitionState === 'switchOut' 
    ? 'animate__animated animate__slideOutDown animate__faster' 
    : 'animate__animated animate__slideInRight animate__faster';

  return (
    <div className="row">
      <div className={`col-md-4 pe-0 ${leftAnimationClass}`}>
        <OrderList 
          orders={orders} 
          compact={true} 
          selectedId={selectedOrder.id} 
          onSelect={onSelect} 
          onDelete={onDelete} 
        />
      </div>
      <div className={`col-md-8 ps-0 ${rightAnimationClass}`}>
        <Products products={products} title={selectedOrder.name} onClose={onClose} />
      </div>
    </div>
  );
};

export default OrderDetailView;