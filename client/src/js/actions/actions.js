import axios from 'axios';

import {
  DELETE_CONTACT,
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_SUCCESS,
  EDIT_CONTACT,
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_SUCCESS,
  GET_CONTACT,
  GET_CONTACT_FAIL,
  GET_CONTACT_SUCCESS,
} from '../contants/actions-types';

export const getContact = () => async (dispatch) => {
  dispatch({
    type: GET_CONTACT,
  });
  try {
    const contactList = await axios.get(`/contact/getAllContact`);
    dispatch({
      type: GET_CONTACT_SUCCESS,
      payload: contactList.data,
    });
  } catch (error) {
    dispatch({
      type: GET_CONTACT_FAIL,
      payload: error.response.data,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_CONTACT,
  });
  try {
    await axios.delete(`/contact/deleteContact/${id}`);
    dispatch({
      type: DELETE_CONTACT_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CONTACT_FAIL,
      payload: error.response.data,
    });
  }
};
export const editContact = (contactModified) => async (dispatch) => {
  const { name, email, phoneNumber, address, _id } = contactModified;
  dispatch({
    type: EDIT_CONTACT,
  });
  try {
    const { data } = await axios.post(`/contact/editContact/${_id}`, {
      name,
      email,
      phoneNumber,
      address,
    });
    dispatch({
      type: EDIT_CONTACT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EDIT_CONTACT_FAIL,
      payload: error.response.data,
    });
  }
};
