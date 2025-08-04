import type { Order, Product } from '../../entities/order/types';
import product from '../../shared/assets/monitor.webp'

export const mockOrders: Order[] = [
  {
    id: 1,
    name: 'Длинное предлинное длиннючее название прихода',
    count: 23,
    amount: '2 500.50 UAH',
    shortDate: '04/12',
    date: '06 / Апр / 2017',
  },
  {
    id: 2,
    name: 'Длинное название прихода',
    count: 23,
    amount: '50 UAH',
    shortDate: '04/12',
    date: '06 / Апр / 2017',
  },
  {
    id: 3,
    name: 'Длинное предлинное длиннючее название прихода',
    count: 23,
    amount: '2 500.50 UAH',
    shortDate: '04/12',
    date: '06 / Апр / 2017',
  },
  {
    id: 4,
    name: 'Длинное название прихода',
    count: 23,
    amount: '50 UAH',
    shortDate: '04/12',
    date: '06 / Апр / 2017',
  },
];

export const mockProducts: Product[] = [
    {
        id: 1, 
        name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6X58-USB3', 
        serial: 'SN-12-3456789',
        status: 'Свободен', 
        img: product
    },
    {
        id: 2, 
        name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6X58-USB3', 
        serial: 'SN-12-3456789',
        status: 'Свободен', 
        img: product
    },
    {
        id: 3, 
        name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6X58-USB3', 
        serial: 'SN-12-3456789',
        status: 'Свободен', 
        img: product
    },
    {
        id: 4, 
        name: 'Gigabyte Technology X58-USB3 (Socket 1366) 6X58-USB3', 
        serial: 'SN-12-3456789',
        status: 'Свободен', 
        img: product
    },
]

