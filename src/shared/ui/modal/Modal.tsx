import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';
import product from '../../assets/monitor.webp'
import Image from 'next/image';
import './custom-modal.scss'

interface ModalDeleteArrivalProps {
  show: boolean;
  onHide: () => void;
  onDelete: (id: number) => void;
  id: number
}

export default function ModalDeleteArrival({ show, onHide, onDelete, id }: ModalDeleteArrivalProps) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      contentClassName="border-0 rounded shadow custom-modal-width"
      container={() => document.getElementById('main-content')}
    >
      <Modal.Header className='position-relative'>
        <button className="btn-close-custom shadow fs-0" onClick={onHide}>
          ⛌
        </button>
        <Modal.Title className="w-100 text-start fs-5 fw-semibold py-2">
          Вы уверены, что хотите удалить этот приход?
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-4 pb-1 pt-1">
        <Row className="align-items-center">
          <Col xs="auto">
            <span className="d-block bg-success rounded-circle" style={{ width: 10, height: 10 }}></span>
          </Col>
          <Col xs="auto">
            <Image
              src={product}
              alt="product"
              width={40}
              height={40}
            />
          </Col>
          <Col className='ms-4 mb-2'>
            <div className="fw-normal text-dark">
              Gigabyte Technology X58-USB3 (Socket 1366) 6 X58-USB3
            </div>
            <div className="text-muted small">SN-12.3456789</div>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer style={{ backgroundColor: '#28a745' }} className="justify-content-end px-4 py-4">
        <button className='btn-cancel text-white' onClick={onHide}>ОТМЕНИТЬ</button>
        <Button className='d-flex justify-content-center align-items-center btn-delete' onClick={() => onDelete(id)}>
          <FaTrashAlt className="me-2" />
          УДАЛИТЬ
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

