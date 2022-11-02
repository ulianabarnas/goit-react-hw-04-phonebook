import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Box from 'components/Box/Box';
import { Subtitle, Title } from './App.styles';


export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate (_, prevState) {
    const newContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (newContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(newContacts));
    }
  }
  
  addContact = (contact) => {
    const { name } = contact;
    if (this.isDublicate(name)) {
      return Notify.info(`${name} is already in contacts.`);
    }

    this.setState((prevState) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }

      return {
        contacts: [...prevState.contacts, newContact],
      }
    })
  }

  isDublicate = (contactName) => {
    const { contacts } = this.state;
    const result = contacts.find(contact => contact.name === contactName);
    return result;
  }

  changeFilter = (e) => {
    this.setState({filter: e.target.value})
  }

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const { addContact, changeFilter, getFilteredContacts, deleteContact } = this;
    const { filter } = this.state;

    const filteredContacts = getFilteredContacts();

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
    )
  }
}

Notify.init({
  position: 'center-top',
  fontSize: '16px',
  timeout: 4000,
  width: '400px'
})