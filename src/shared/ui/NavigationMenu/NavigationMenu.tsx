'use client'; 
import Image from 'next/image';
import React from 'react';
import ava from '../../assets/ava.webp';
import './custom-nav.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';  
import { IoMdSettings } from "react-icons/io"

export default function NavigationMenu() {
  const pathname = usePathname();  

  const links = [
    { href: '/orders', label: 'ПРИХОД' },
    { href: '/groups', label: 'ГРУППЫ' },
    { href: '/products', label: 'ПРОДУКТЫ' },
    { href: '/settings', label: 'ПОЛЬЗОВАТЕЛИ' },
    { href: '/users', label: 'НАСТРОЙКИ' },
  ];

  return (
    <div className='d-flex flex-nowrap vh-100 z-1'>
      <div className='d-flex flex-column flex-shrink-0 p-3 text-bg-white shadow-lg' style={{ width: '230px' }}>
        <div className='text-center mb-5 mt-4 position-relative'>
          <Image className='rounded-circle' alt='ava' src={ava} width={100} height={100} />
          <button className=' position-absolute btn-settings'>
            <IoMdSettings />
          </button>
        </div>
        <ul className='nav nav-underline flex-column mb-auto text-center'>
          {links.map((link) => (
            <li key={link.href} className='nav-item mb-2 fw-medium'>
              <Link
                href={link.href}
                className={`nav-link text-black ${pathname === link.href ? 'active fw-medium' : ''}`} 
                aria-current={pathname === link.href ? 'page' : undefined}  
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}