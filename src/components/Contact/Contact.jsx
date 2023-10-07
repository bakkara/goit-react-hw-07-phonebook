import { Button } from "components/ContactForm/ContactForm.styled"
import { ContactWrapper } from "./Contact.styled"
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({
    contact: { id, name, phone },
}) => {
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };
    return (
        <ContactWrapper>
            <p>{name}: {phone}</p>
        <Button onClick={() => handleDelete(id)}>Delete</Button>
        </ContactWrapper>
    )
}
