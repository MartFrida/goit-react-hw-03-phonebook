import { StyledContactsItem, StyledContactsList } from "./ContactList.styled"

export const ContactList = ({ filteredContacts, onDeleteUser }) => {
  return (
    <StyledContactsList>
      {filteredContacts.map(user =>
        <StyledContactsItem key={user.id}>
          {user.name}: {user.number}
          <button onClick={() => onDeleteUser(user.id)}>
            Delete
          </button>
        </StyledContactsItem>)}
    </StyledContactsList>
  )
}