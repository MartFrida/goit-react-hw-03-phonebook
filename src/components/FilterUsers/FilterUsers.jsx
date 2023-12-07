import { StyledContactsList, StyledContactsSection, StyledContactsText, StyledInput } from "components/Phonebook/Phonebook.styled"

export const FilterUsers = ({ filter, handleChangeInput }) => {
  return (<>
    <StyledContactsText>Find contacts by name</StyledContactsText>
    <StyledInput name='filter' value={filter} onChange={handleChangeInput} placeholder='Enter user name'></StyledInput>

  </>)
}