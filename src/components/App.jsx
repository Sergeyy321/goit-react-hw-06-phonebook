import { Filter } from 'components/Filter/Filter';

import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { ContactStyled } from './App/App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../Redux/contactsReducer';
export const App = () => {
  //   const getContacts = () => {
  //    const savedContacts = localStorage.getItem('savedContacts');
  //     if (savedContacts !== null) {

  //  return JSON.parse(savedContacts);

  //     }
  //     return [
  //    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //  ]
  //  }
  // let [contacts, setContacts] = useState(getContacts);

  // const [filter, setFilter] = useState('')

  //   const filter = useSelector(state => state.filters);
  //   useEffect(() => {
  //         localStorage.setItem('savedContacts', JSON.stringify(contacts));
  //   }
  // ,[contacts])
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  // Access dispatch function from Redux store
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const onAddContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
     
      dispatch(addContact({ id: nanoid(), name, number }));
    }
  };

const getFilteredContacts = () => {
 

  if (Array.isArray(contacts)) {
     const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  } else {
    return [];
  }
};


  return (
    <ContactStyled>
      <Phonebook onAddContact={onAddContact} />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <Contacts contacts={getFilteredContacts()} onDelete={onDelete} />
      </div>
    </ContactStyled>
  );
};




// import { ContactList } from '../components/Contacts/Contacts';
// import { Filter } from '../components/Filter/Filter';
// import { ContactForm } from '../components/Phonebook/Phonebook';

// import { useSelector } from 'react-redux';
// // const CONTATCTS = 'contatcts';
// // const initialContacts = [
// //   { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
// //   { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
// //   { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
// //   { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// // ];
// export const App = () => {
//   const filtered = useSelector(state => state.filter);
//   const contacts = useSelector(state => state.contacts);

//   const filterContact = e => {
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filtered.toLowerCase())
//     );
//     return filteredContacts;
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList listContact={filterContact()} />
//     </div>
//   );
// };
