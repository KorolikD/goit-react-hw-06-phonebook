import { useDispatch, useSelector } from 'react-redux';
import {
  FilterButton,
  ListContacts,
  ListItem,
  Text,
  BoldText,
} from './ContactsList.styled';
import { deleteContact, getContacts } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleFilteredContacts = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = visibleFilteredContacts(contacts);

  return (
    <ListContacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Text>
            <BoldText>{name}</BoldText>: {number}
          </Text>
          <FilterButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </FilterButton>
        </ListItem>
      ))}
    </ListContacts>
  );
};
