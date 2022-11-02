import PropTypes from 'prop-types';
import { ContactButton, Icon, Item, List } from "./ContactList.styles";

export default function ContactList({ contacts, onDeleteContact }) {
  const elements = contacts.map(({name, number, id}) => {
    return <Item key={id}><Icon/>{name}: {number}
      <ContactButton
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </ContactButton>
    </Item>
  })
  
  return (
    <List>
      {elements}
    </List>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}