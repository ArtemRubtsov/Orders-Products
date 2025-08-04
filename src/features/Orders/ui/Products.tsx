'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import './products.scss'
import { useAppDispatch } from '../../../shared/hooks/hooks';
import { deleteProduct } from '../../../features/Products/model/products.slice';
import ModalDeleteArrival from '../../../shared/ui/modal/Modal';

interface Product {
  id: number;
  name: string;
  serial: string;
  status: string;
  img: StaticImageData;
}

interface ProductsProps {
  products: Product[];
  title?: string
  onClose?: () => void;
}

export default function Products({ products, title, onClose }: ProductsProps) {
   const [show, setShow] = React.useState<boolean>(false)
   const dispatch = useAppDispatch()
   const handledeleteProduct = (id: number) => {
      setShow(false)
      dispatch(deleteProduct(id))
  }

  return (
    <div className='border rounded bg-white ms-4 position-relative'>
      <button className="btn-close-custom shadow" onClick={onClose}>
        ×
      </button>

      <ul className='list-group list-group-flush'>
        <div className='p-3 px-5 d-flex flex-column justify-content-start align-items-start gap-3'>
          <h3 className='text-black fs-4 mb-0 text-nowrap'>{title}</h3>
          <button className='add-product'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
            </svg>
            Добавить продукт
          </button>
        </div>
        

        {products.map((product, index) => (
          <li key={product.id} className={`list-group-item p-3  d-flex justify-content-between align-items-center px-5 ${index === 0 ? 'border-top' : ''}`}>
            <div className='d-flex align-items-center flex-grow-1 gap-3'>
              <div className='d-flex align-items-center gap-3'>
                <span className='text-success fs-1'>•</span>
                <Image alt='product' width={50} height={50} src={product.img}/>
              </div>
              <div className='d-flex flex-column '>
                <span className='fs-5 text-black'>{product.name}</span>
                <span className='text-muted'>{product.serial}</span>
              </div>
              <span className='fs-6 text-success ms-5'>{product.status}</span>
            </div>
            <ModalDeleteArrival show={show} onHide={() => setShow(false)} onDelete={() => handledeleteProduct(product.id)} id={product.id}/> 
            <button className='btn-trash ms-3' onClick={() => setShow(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill text-muted " viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}