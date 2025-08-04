import React from 'react';
import OrderItem from './OrderItem';
import { Order } from '../../../entities/order/types';

interface OrderListProps {
  orders: Order[];
  compact: boolean;
  selectedId?: number;
  onSelect: (order: Order) => void;
  onDelete?: (id: number) => void;
  onItemSelect?: (order: Order) => void; 
}

const OrderList: React.FC<OrderListProps> = React.memo(({ orders, compact, selectedId, onSelect, onDelete }) => (
  <ul className='list-group d-flex gap-3'>
    {orders.map((order) => (
      <OrderItem
        key={order.id}
        order={order}
        compact={compact}
        isSelected={order.id === selectedId}
        onSelect={() => onSelect(order)}
        onDelete={onDelete ? () => onDelete(order.id) : undefined}
      />
    ))}
  </ul>
));

export default OrderList;