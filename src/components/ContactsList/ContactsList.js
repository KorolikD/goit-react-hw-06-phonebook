import { useDispatch, useSelector } from 'react-redux';
import {
  FilterButton,
  ListContacts,
  ListItem,
  Text,
  BoldText,
} from './ContactsList.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ListContacts>
      {contacts.map(({ id, name, number }) => (
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
