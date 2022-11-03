import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Box from 'components/Box/Box';
import { Subtitle, Title } from './App.styles';
import useLocalStorage from 'hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    const { name } = contact;
    if (isDublicate(name)) {
      return Notify.info(`${name} is already in contacts.`);
    };

    setContacts((prevState) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }

      return [...prevState, newContact];
    })
  };

  const isDublicate = (contactName) => {
    return contacts.find(contact => contact.name === contactName);
  };

  const changeFilter = (e) => {
    setFilter(e.target.value)
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const filteredContacts = getFilteredContacts();

  const deleteContact = (contactId) => {
    setContacts((prevState) => {
      return prevState.filter(contact => contact.id !== contactId);
    })
  };

  return (
    <Box
      as="section"
      maxWidth="400px"
      width="80vw"
      textAlign="center"
      mx="auto"
      mt={5}
      pt={5}
      bg="white"
      borderRadius="normal"
      boxShadow="normal"
      overflow="hidden">
      <Box
        px={5}
      >
        <Title>Phonebook</Title>
        <ContactForm addContact={addContact} />
      </Box>
        
      <Box
        mt={5}
        py={5}
        px={5}
        bg="primary"
      >
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={filteredContacts} onDeleteContact={deleteContact} />
      </Box>
    </Box>
  );
};

Notify.init({
  position: 'center-top',
  fontSize: '16px',
  timeout: 4000,
  width: '400px'
});