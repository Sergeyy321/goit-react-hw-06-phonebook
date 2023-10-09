import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { ContactStyled } from './App/App.styled';


export const App = () => {




  return (
    <ContactStyled>
      <Phonebook  />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <Contacts   />
      </div>
    </ContactStyled>
  );
};
