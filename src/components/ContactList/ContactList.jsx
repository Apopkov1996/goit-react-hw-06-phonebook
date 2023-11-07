import React from 'react';
import listcss from './contactlist.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/cotactSlice';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul className={listcss.list}>
      {filterContacts?.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={listcss.btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
