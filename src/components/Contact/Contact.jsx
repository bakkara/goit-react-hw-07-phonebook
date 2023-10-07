import { Button } from "components/ContactForm/ContactForm.styled"
import { ContactWrapper } from "./Contact.styled"
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({
    contact: { id, name, phone },
}) => {
  const dispatch = useDispatch();

    return (
        <ContactWrapper>
            <p>{name}: {phone}</p>
        <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </ContactWrapper>
    )
}
