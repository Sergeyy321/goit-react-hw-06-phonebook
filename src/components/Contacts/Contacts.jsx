import React from 'react';
import PropTypes from 'prop-types';
import { ContactStyle } from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/sliceContact';

export const Contacts = ({}) => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  return (
    <ContactStyle>
      <ul>
        {contacts.map(el => {
          return (
            <li key={el.id}>
              {el.name} {el.number}{' '}
              <button
                onClick={() => {
                  dispatch(deleteContact(el.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </ContactStyle>
  );
};

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
