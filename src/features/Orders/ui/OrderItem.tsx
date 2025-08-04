import { Order } from '../../../entities/order/types';
import React from 'react';


interface OrderItemProps {
  order: Order;
  compact: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onDelete?: () => void;
}

const OrderItem: React.FC<OrderItemProps> = React.memo(({ order, compact, isSelected, onSelect, onDelete }) => (
  <li
    key={order.id}
    className={`list-group-item p-3 bg-white d-flex justify-content-start align-items-center px-5 ${compact && isSelected ? 'border-end-0 position-relative selected-order' : ''}`}
  >
    {!compact && (
      <h3 className='fs-5 fw-normal text-black text-wrap me-4'>
        {order.name}
      </h3>
    )}
    <div className='d-flex gap-4'>
      <button className='btn-order' onClick={onSelect}>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list-ul text-muted" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
      </button>
      <div className='d-flex flex-column'>
        <span className='text-black fs-4'>{order.count}</span>
        <span className='text-muted fs-6'>Продукта</span>
      </div>
    </div>
    <div className="d-flex flex-column ms-3 justify-content-center ms-5">
      <span className={`text-muted fs-6 ${compact ? 'text-start' : 'text-center'}`}>{order.shortDate}</span>
      <span className="text-black fs-5">{order.date}</span>
    </div>
    {!compact && (
      <>
        <div className='d-flex flex-column ms-8'>
          <span className='text-muted fs-6'>100 $</span>
          <span className='fs-5 text-black'>{order.amount}</span>
        </div>
        {onDelete && (
          <button className='btn-trash ms-auto' onClick={onDelete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill text-muted" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
            </svg>
          </button>
        )}
      </>
    )}
  </li>
));

export default OrderItem;