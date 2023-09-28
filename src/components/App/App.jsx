import { Filter } from 'components/Filter/Filter';
import { useEffect, useState } from 'react';
import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { ContactStyled } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactsSlice';
export const App = () => {
  const getContacts = () => {
    const savedContacts = localStorage.getItem('savedContacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  };
  let [contacts, setContacts] = useState(getContacts);
 const [filter, setFilter] = useState('');
//   const dispatch = useDispatch();

  // const contacts = useSelector(state => state.contacts);

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const onDelete = contactId => {
  deleteContact(prev => prev.filter(contact => contact.id !== contactId));
  };

  const onfilterChange = e => {
   setFilter(e.currentTarget.value);
  };
  const onAddContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
     
      setContacts({ id: nanoid(), name, number });
    }
  };

  const getFilteredContacts = () => {
    const normalizedValue = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedValue);
    });
  };

  return (
    <ContactStyled>
      <Phonebook onAddContact={onAddContact} />
      <div>
        <h2>Contacts</h2>
        <Filter onfilterChange={onfilterChange} filter={filter} />
        <Contacts contacts={getFilteredContacts()} onDelete={onDelete} />
      </div>
    </ContactStyled>
  );
};
