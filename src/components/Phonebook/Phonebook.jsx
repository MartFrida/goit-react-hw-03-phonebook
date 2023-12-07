import { nanoid } from 'nanoid';
import React from 'react';
import { StyledButton, StyledContactsList, StyledContactsSection, StyledContactsText, StyledInput, StyledPhonebook, StyledPhonebookForm, StyledWrapper } from './Phonebook.styled';
import { FilterUsers } from 'components/FilterUsers/FilterUsers';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

// додавання імені контакту та відображення списку контактів
//   - створити компонент класу Phonebook
//   - створити функцію, яка отримує name із інпуту handleChangeInput 
//   - створити функцію, яка додає обьект нового юзера (name та id) в массив контактів в стейт handleSubmitAddUser
//   - вивести масив контактів в Contacts 
// Крок 2 додавати номери телефонів
//   - додати в стейт змінну number
//   - розширити функцію handleChangeInput для number
// Крок 3 фільтрація списку контактів за ім'ям
//   - filter в стейті для проміжкового значення
//   - функцію для зміни поля фільтер, розширити функцію handleChangeInput для filter
//   - створити функцію для фільтрації
// Крок 4 в окремі компоненти
// Крок 5 Заборони додавати присутні контакти
// Крок 6 Дозволивши видаляти контакти з массиву

export class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
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

  isUserExist = (handleName) => {
    const arrNames = [];
    const { contacts } = this.state;
    contacts.map(element => arrNames.push(element.name)
    );
    return console.log(arrNames.includes(handleName))

  }

  handleSubmitAddUser = (e) => {

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name: prevState.name, number: prevState.number },],
      name: '',
      number: '',
    }))

  }

  handleChangeInput = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }
  handleDeleteUser = (id) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
  }

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <StyledWrapper >
        <h2>Phonebook</h2>
        <ContactForm name={name} number={number} handleChangeInput={this.handleChangeInput} handleSubmitAddUser={this.handleSubmitAddUser} isUserExist={() => this.isUserExist(name)} />

        <h2>Contacts</h2>
        <StyledContactsSection>
          <FilterUsers filter={filter} handleChangeInput={this.handleChangeInput} />
          <ContactList filteredContacts={filteredContacts} onDeleteUser={this.handleDeleteUser} />
        </StyledContactsSection>

      </StyledWrapper>
    )
  }
}
