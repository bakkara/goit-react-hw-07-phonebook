import { Toaster } from "react-hot-toast";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectError, selectIsLoading } from "redux/selectors";


export const App = () => {
const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
   
  useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);
  
    return (
      <Layout>
        <h1>Phonebook</h1>
        
        <ContactForm />
        <h2>Contacts</h2>
        
       <Filter />
        <ContactList />
        {isLoading && !error && <b>Request in progress...</b>}
        <Toaster/>
     </Layout>
    ); 
  }