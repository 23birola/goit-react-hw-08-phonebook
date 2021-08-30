import css from './ContactsView.module.css';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/contacts-operations';

const ContactsView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm/>

            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactList/> 
            <Toaster />
        </>
    )
};

export default ContactsView;