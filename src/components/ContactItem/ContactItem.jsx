import React from "react"
import PropTypes from "prop-types"

const ContactItem = ({contacts}) => (
    <>
        {contacts.map(({ name, number, id}) => (
            <li key={id}>
                {name} : <span>{number}</span>
                
            </li>
        ))}
    </>
)

ContactItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    
  };

export default ContactItem