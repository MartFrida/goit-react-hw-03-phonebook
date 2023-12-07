import { StyledButton, StyledContactsList } from "components/Phonebook/Phonebook.styled"

export const ContactList = ({ filteredContacts, onDeleteUser }) => {
  return (
    <StyledContactsList>
      {filteredContacts.map(user =>
        <li key={user.id}>
          {user.name}:{user.number}
          <StyledButton onClick={() => onDeleteUser(user.id)}>
            Delete
          </StyledButton>
        </li>)}
    </StyledContactsList>
  )
}