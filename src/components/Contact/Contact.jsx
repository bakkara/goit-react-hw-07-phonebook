import { Button } from "components/ContactForm/ContactForm.styled"
import { ContactWrapper } from "./Contact.styled"
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useState } from "react";
import ContactEditModal from "components/ContactModal/ContactModal";

export const Contact = ({
    contact: { id, name, phone },
}) => {
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditModalClose = () => {
    setIsEditing(false);
  };
    return (
        <ContactWrapper>
            <p>{name}: {phone}</p>
        <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        <Button onClick={handleEditClick}>Edit</Button>
      {isEditing && (
          <ContactEditModal
            isOpen = {isEditing}
          contact={{ id, name, phone }}
          onRequestClose={handleEditModalClose}
        />
      )}
        </ContactWrapper>
    )
}
