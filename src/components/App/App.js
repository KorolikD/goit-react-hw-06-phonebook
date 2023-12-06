import { GlobalStyles } from 'styles';

import { Title, TitleH2 } from './App.styled';
import { ContactForm, Filter, ContactsList } from 'components';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Title>Phonebook</Title>
      <ContactForm />

      <TitleH2>Contacts</TitleH2>
      <Filter />

      {contacts.length > 0 && <ContactsList />}

      <GlobalStyles />
    </>
  );
};
