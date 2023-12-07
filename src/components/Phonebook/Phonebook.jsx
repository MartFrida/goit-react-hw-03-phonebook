import { nanoid } from 'nanoid';
import React from 'react';
import { StyledWrapper } from './Phonebook.styled';
import { FilterUsers } from 'components/FilterUsers/FilterUsers';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

export class Phonebook extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount = () => {
    const handleContacts = JSON.parse(window.localStorage.getItem('CONTACTS_DATA'))
    if (handleContacts?.length) {
      this.setState({ contacts: handleContacts })
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem('CONTACTS_DATA', JSON.stringify(this.state.contacts))
    }
  }

  componentWillUnmount = () => {
    window.localStorage.setItem('CONTACTS_DATA', JSON.stringify(this.state.contacts))
  }

  handleAddUser = ({ name, number }) => {
    const isExist = this.state.contacts.some((item) => item.name === name)
    // console.log();
    if (isExist) {
      alert('ALERT')
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }]
    }
    ))
  }

  handleSetFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  handleDeleteUser = (id) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
  }

  render() {
    const { filter } = this.state;
    // console.log(this.getFilteredContacts());

    return (
      <StyledWrapper >
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.handleAddUser} />

        <h2>Contacts</h2>
        <FilterUsers filter={filter} handleChangeInput={this.handleSetFilter} />
        <ContactList filteredContacts={this.getFilteredContacts()} onDeleteUser={this.handleDeleteUser} />

      </StyledWrapper>
    )
  }
}
