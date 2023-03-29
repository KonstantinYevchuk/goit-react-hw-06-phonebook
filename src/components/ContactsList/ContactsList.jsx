import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { List, Item } from './ContactsList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    
    // const dispatch = useDispatch();
    // const handleDelete = () => dispatch(deleteContact(id));
    // const deleteContact = id => {
    //     setContacts(contacts.filter(contact => contact.id !== id))
    //   }
    return (
        <List>
        {contacts.map(contact => {
        return <Item key={contact.id}>
            <Contact contact={contact} />
            </Item>    
        }  
        )}
        </List>        
    ) 
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired).isRequired
}