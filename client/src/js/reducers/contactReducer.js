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

const initialState = {
  loading: false,
};

const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_CONTACT:
    case EDIT_CONTACT:
    case GET_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contactList: payload,
      };
    case DELETE_CONTACT_FAIL:
    case EDIT_CONTACT_FAIL:
    case GET_CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contactDeleted: true,
      };
    case EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contactList: state.contactList.map((el) =>
          el._id === payload._id ? payload : el
        ),
      };

    default:
      return state;
  }
};
export default contactReducer;
