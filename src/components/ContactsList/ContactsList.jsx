// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { List, Item } from './ContactsList.styled';
import { Contact } from 'components/Contact/Contact';
import { ErrorText } from "components/App.styled";

export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    // const filter = useSelector()
  
    // const normalizedContacts = contacts.toLowerCase();  
    // const filteredContacts = contacts.filter(contact => 
    // contact.name.toLowerCase().includes(normalizedContacts));
    return (
        <List>
        {contacts.length > 0 ? contacts.map(contact => {
        return <Item key={contact.id}>
            <Contact contact={contact} />
            </Item>    
        }  
        ) : <ErrorText>Sorry! No contacts in phonebook!</ErrorText>}   
        </List>        
    ) 
}

// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     }).isRequired).isRequired
// }