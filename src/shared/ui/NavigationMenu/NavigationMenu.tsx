import Image from 'next/image';
import React from 'react';
import ava from '../../assets/ava.webp'
import './custom-nav.scss';
import Link from 'next/link';

export default function NavigationMenu() {
  return (
    <div className='d-flex flex-nowrap vh-100 z-1'>
      <div className='d-flex flex-column flex-shrink-0 p-3 text-bg-white shadow-lg' style={{width: '230px'}}>
        <div className='text-center mb-5 mt-4'>
          <Image className='rounded-circle' alt='ava' src={ava} width={100} height={100} />
        </div>
        <ul className='nav nav-underline flex-column mb-auto text-center'>
          <li className='nav-item mb-2'>
            <Link href="/orders" className='nav-link fw-medium active text-black' aria-current='page'>ПРИХОД</Link>
          </li>
          <li className='mb-2 fw-medium'>
            <Link href="/groups" className='nav-link text-black'>ГРУППЫ</Link>
          </li>
          <li className='mb-2 fw-medium'>
            <Link href="/products" className='nav-link text-black'>ПРОДУКТЫ</Link>
          </li>
          <li className='mb-2 fw-medium'>
            <Link href="/settings" className='nav-link text-black'>ПОЛЬЗОВАТЕЛИ</Link>
          </li>
          <li className='mb-2 fw-medium'>
            <Link href="/users" className='nav-link text-black'>НАСТРОЙКИ</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}