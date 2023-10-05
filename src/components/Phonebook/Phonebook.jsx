import { PhonebookStyled, Input } from './Phonebook.styled';
import { nanoid } from 'nanoid';

import { Btn } from './Phonebook.styled'
import {  useState } from 'react';
const nameId = nanoid(9);
const numberId = nanoid(9);

export const  Phonebook = ({onAddContact,}) => {
  
const [formData, setFormData] = useState({
  name: '',
  number: '',
});

  
  const onChange = (event) => {
 const { name, value } = event.target;
 setFormData({ ...formData, [name]: value });
  };

 const  reset = () => {
  setFormData({name:'',number:''})
  };
 const  onFormSubmit = event => {
   event.preventDefault();
    onAddContact(formData);
    reset()
  };
 



    return (
      <PhonebookStyled>
        <form action="" onSubmit={onFormSubmit}>
          <label htmlFor={nameId}>
            <h2>Name</h2>
            <Input
              id={nameId}
              value={formData.name}
              type="text"
              onChange={onChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={numberId}>
            <h2>Number</h2>
            <Input
              id={numberId}
              type="tel"
              value={formData.number}
              onChange={onChange}
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <Btn type="submit">Add contact</Btn>
        </form>
      </PhonebookStyled>
    );
  }









  // import { useState } from 'react';

  // import { useDispatch, useSelector } from 'react-redux';
  // import { add } from 'Redux/sliceContact';

  // export const ContactForm = () => {
  //   const dispatch = useDispatch();
  //   const [name, setName] = useState('');
  //   const [number, setNumber] = useState('');

  //   const handleChange = evt => {
  //     const { name, value } = evt.target;
  //     name === 'name' ? setName(value) : setNumber(value);
  //   };
  //   const reset = () => {
  //     setName('');
  //     setNumber('');
  //   };
  //   const contacts = useSelector(state => state.contacts);
  //   return (
  //     <form
  //       onSubmit={e => {
  //         e.preventDefault();
  //         if (
  //           contacts.some(
  //             value =>
  //               value.name.toLocaleLowerCase() === name.toLocaleLowerCase()
  //           )
  //         ) {
  //           alert(`${name} is alredy in contacts`);
  //         } else {
  //           dispatch(add({ name, number }));
  //         }
  //         reset();
  //       }}
  //     >
  //       <div>
  //         <label>
  //           <span>Name</span>
  //         </label>
  //         <input
  //           value={name}
  //           onChange={handleChange}
  //           type="text"
  //           name="name"
  //           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //           required
  //         />

  //         <label>
  //           <span>Number</span>
  //         </label>
  //         <input
  //           value={number}
  //           onChange={handleChange}
  //           type="tel"
  //           name="number"
  //           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //           required
  //         />
  //         <button type="submit">Add contact</button>
  //       </div>
  //     </form>
  //   );
  // };
