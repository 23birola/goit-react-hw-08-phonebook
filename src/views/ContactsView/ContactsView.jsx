import css from './ContactsViews.module.css';
import { Toaster } from 'react-hot-toast';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { getFilter, getContacts, getSelectedContacts } from '../../redux/contacts/contacts-selectors';

const ContactsView = () => {
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const selectedContacts = useSelector(getSelectedContacts);
    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm/>

            <h2>Contacts</h2>
            <Filter/>
            {!filter && <ContactList contacts={contacts} />}
            {filter && <ContactList contacts={selectedContacts} />}
            <Toaster />
        </>
    )
};

export default ContactsView;