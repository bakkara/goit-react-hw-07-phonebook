import { Contact } from "components/Contact/Contact"
import { List } from "./ContactList.styled"
import {useSelector } from 'react-redux';
// import { selectContacts, selectFilter } from 'redux/selectors';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
 /*  const filter = useSelector(selectFilter); */

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

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

