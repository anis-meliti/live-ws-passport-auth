import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../js/actions/actions';
import ContactCard from './ContactCard';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);
  const contactList = useSelector((state) => state.contactReducer.contactList);
  const loading = useSelector((state) => state.contactReducer.loading);
  return loading ? (
    <h1> wait please </h1>
  ) : (
    <div className='row'>
      {contactList &&
        contactList.map((contact) => <ContactCard contact={contact} />)}{' '}
    </div>
  );
};

export default ContactList;
