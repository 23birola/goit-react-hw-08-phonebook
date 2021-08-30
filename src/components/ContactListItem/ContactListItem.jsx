import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ContactListItem = ({ contact}) => {
  
const dispatch = useDispatch();
const deleteItem = (id) => {
    dispatch(deleteContact(id));
  };

return (
    <li className={css.contactItem}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.number}>{contact.number}</span>
        <IconButton aria-label="delete" type="button" onClick={() => deleteItem(contact.id)}><DeleteIcon /></IconButton>
    </li>);
}
    
ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactListItem;