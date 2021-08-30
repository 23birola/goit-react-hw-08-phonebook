import css from './ContactsView.module.css';
import { Toaster } from 'react-hot-toast';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactsView = () => {
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