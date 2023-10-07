import { Contact } from "components/Contact/Contact"
import { List } from "./ContactList.styled"
import {useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

    return (
     <List>
        {contacts.map(item => (
            <li key={item.id}>
            <Contact contact={item}/>
            </li>
      ))}
     </List>
 )
}

