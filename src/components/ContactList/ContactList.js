import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.scss';

const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.length === 0 ? (
    <p>The phonebook is empty</p>
  ) : (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className="item" key={id}>
          {name}: {number}
          <button
            className="button"
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
