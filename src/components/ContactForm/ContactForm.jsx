import { StyledButton, StyledInput, StyledPhonebook } from "components/Phonebook/Phonebook.styled"

export const ContactForm = ({ name, number, handleChangeInput, handleSubmitAddUser, isUserExist }) => {
  return (
    <StyledPhonebook>
      <StyledInput name="name" value={name} onChange={handleChangeInput} placeholder="Enter name" />
      <StyledInput name='number' value={number} onChange={handleChangeInput} placeholder="Enter phone number" />
      <StyledButton type='submit' onClick={handleSubmitAddUser} >Add contact</StyledButton>
    </StyledPhonebook>
  )
}