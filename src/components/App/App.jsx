import React from 'react';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import appcss from './app.module.css';

export const App = () => {
  return (
    <div className={appcss.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
