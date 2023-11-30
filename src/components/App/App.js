import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { GlobalStyles } from 'styles';

import { Title, TitleH2 } from './App.styled';
import { ContactForm, Filter, ContactsList } from 'components';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const isContactInList = contacts.some(
      ({ name: contactName }) =>
        contactName.toLowerCase().trim() === name.toLowerCase().trim()
    );

    isContactInList
      ? alert(`${name} is olready in contacts`)
      : setContacts(prevState => [
          ...prevState,
          { id: nanoid(), name: name.trim(), number },
        ]);
  };

  const onChangeFilter = value => {
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(item => item.id !== contactId));
  };

  const visibleContactsFilter = arr => {
    return arr.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = visibleContactsFilter(contacts);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <TitleH2>Contacts</TitleH2>
      <Filter filter={filter} onChange={onChangeFilter} />

      {visibleContacts.length > 0 && (
        <ContactsList contacts={visibleContacts} onDelete={deleteContact} />
      )}

      <GlobalStyles />
    </>
  );
};
