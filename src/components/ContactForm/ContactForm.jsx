import { StyledButton, StyledInput } from "components/Phonebook/Phonebook.styled"
import React from "react";
import { StyledContactForm } from "./ContactForm.styled";

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  }
  handleChangeInput = e => {
    const { target } = e;
    const { name, value } = target;
    this.setState({ [name]: value })
  }

  handleSubmitAddUser = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state)
    this.setState({
      name: '',
      number: '',
    })
  }
  render() {
    const { name, number } = this.state;

    return (
      <StyledContactForm onSubmit={this.handleSubmitAddUser} >
        <StyledInput name="name" value={name} onChange={this.handleChangeInput} placeholder="Enter name" />
        <StyledInput name='number' value={number} onChange={this.handleChangeInput} placeholder="Enter phone number" />
        <StyledButton>Add contact</StyledButton>
      </StyledContactForm>
    )
  }

}