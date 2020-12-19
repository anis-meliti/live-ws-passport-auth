import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { editContact } from '../js/actions/actions';

const ModalComponent = ({ isOpen, toggle, contact }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  useEffect(() => {
    setName(contact.name);
    setAddress(contact.address);
    setNumber(contact.phoneNumber);
    setEmail(contact.email);
  }, [contact]);
  const dispatch = useDispatch();
  const handelEdit = () => {
    dispatch(
      editContact({
        _id: contact._id,
        email,
        address,
        phoneNumber: number,
        name,
      })
    );
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          name='address'
          placeholder='address'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type='number'
          name='phoneNumber'
          placeholder='number'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={handelEdit}>
          Do Something
        </Button>{' '}
        <Button color='secondary' onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;
