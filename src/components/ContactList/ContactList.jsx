import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter, getContacts, getSelectedContacts } from '../../redux/contacts/contacts-selectors';
import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = () => {
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);
    const selectedContacts = useSelector(getSelectedContacts);
    const contactsData = filter ? selectedContacts : contacts;
  return (
      <ul className={css.contactList}>
        {contactsData.map(contact =>
          <ContactListItem contact={contact} key={contact.id}/>)}
      </ul>);
}

export default ContactList;