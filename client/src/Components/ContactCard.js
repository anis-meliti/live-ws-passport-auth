import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../js/actions/actions';
import profileImage from '../assets/PngItem_1468479.png';
import { editContact } from '../js/actions/actions';
import ModalComponent from './ModalComponent';

const ContactCard = ({
  contact: { _id, name, email, phoneNumber, address },
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(_id));
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);
  return (
    <>
      <div className='col-md-4 mt-3'>
        <div className='card' style={{ width: '18rem;' }}>
          <img src={profileImage} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Name: {name}</h5>
            <h5 className='card-title'>Email: {email}</h5>
            <h5 className='card-title'>Phone: {phoneNumber}</h5>
          </div>
          <div className='card-footer'>
            <button className='btn btn-danger' onClick={handleDelete}>
              Delete
            </button>
            <button className='btn btn-primary' onClick={toggle}>
              Edit
            </button>
          </div>
        </div>
      </div>
      <ModalComponent
        isOpen={show}
        toggle={toggle}
        contact={{ name, email, phoneNumber, address, _id }}
      />
    </>
  );
};

export default ContactCard;
