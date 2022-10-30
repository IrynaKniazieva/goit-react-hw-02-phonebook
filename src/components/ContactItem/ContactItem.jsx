import React from "react"

import PropTypes from "prop-types"

const ContactItem = ({contacts, onDeleteContact}) => (
    <>
        {contacts.map(({ name, number, id}) => (
            <li  key={id}>
                {name} : <span>{number}</span>
                <button onClick={() => onDeleteContact(id)}>Delete</button>  
            </li>
        ))}
    </>
)

ContactItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    
  };

export default ContactItem