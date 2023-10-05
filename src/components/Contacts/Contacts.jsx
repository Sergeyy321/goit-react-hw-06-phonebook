import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ContactStyle} from './Contacts.styled'
import { useSelector, useDispatch } from 'react-redux';
 export const Contacts=()=>  {
   
  
   const contacts = useSelector(state => state.contacts)
   console.log(contacts);
    return (
      <ContactStyle>
      
        <ul>
          {contacts.map(el => {
            return (
              <li key={el.id}>
                {el.name} {el.number}
                <button onClick={() => this.props.onDelete(el.id)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </ContactStyle>
    );
 }

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired
};







// import PropTypes from 'prop-types';

// import { useDispatch } from 'react-redux';
// import { remove } from 'Redux/sliceContact';

// export const ContactList = ({ listContact }) => {
//   const dispatch = useDispatch();
//   return listContact.map(cont => {
//     return (
//       <p key={cont.id}>
//         <span>
//           {cont.name}: {cont.number}
//         </span>
//         <button
//           type="button"
//           onClick={() => {
//             dispatch(remove(cont.id));
//           }}
//         >
//           Delete
//         </button>
//       </p>
//     );
//   });
// };

// ContactList.propTypes = {
//   listContact: PropTypes.array.isRequired,
// };