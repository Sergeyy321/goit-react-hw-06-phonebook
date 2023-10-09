import React from 'react';
import { ContactStyle } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/sliceContacts';
import { useSelector } from 'react-redux';
export const Contacts = () => {

 
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
    const getContacts = () => {
      if (Array.isArray(contacts)) {
        const normalizedValue = filter.toLowerCase().trim();
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedValue)
        );
      } else {
        return [];
      }
    };

  const dispatch = useDispatch();
  return (
    <ContactStyle>
      <ul>
        {getContacts().map(el => {
          return (
            <li key={el.id}>
              {el.name} {el.number}
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
